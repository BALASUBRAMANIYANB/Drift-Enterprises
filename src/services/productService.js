import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  setDoc,
  query,
  where,
  orderBy,
  Timestamp 
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "../config/firebase";

const PRODUCTS_COLLECTION = "products";
const CATEGORIES_COLLECTION = "categories";

// Product CRUD Operations
export const productService = {
  // Create a new product
  async createProduct(productData, imageFiles) {
    try {
      // Upload images to Firebase Storage
      const imageUrls = await this.uploadProductImages(imageFiles);
      
      const product = {
        ...productData,
        images: imageUrls,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), product);
      return { id: docRef.id, ...product };
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  // Get all products
  async getAllProducts() {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, PRODUCTS_COLLECTION), orderBy("createdAt", "desc"))
      );
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Get product by ID
  async getProductById(productId) {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, productId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  // Get products by category
  async getProductsByCategory(category) {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  },

  // Get products by category and subcategory
  async getProductsBySubcategory(category, subcategory) {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where("category", "==", category),
        where("subcategory", "==", subcategory)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching products by subcategory:", error);
      throw error;
    }
  },

  // Update product
  async updateProduct(productId, updates) {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, productId);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
      return { id: productId, ...updates };
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  // Delete product
  async deleteProduct(productId) {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, productId);
      
      // Get product data to delete associated images
      const productSnap = await getDoc(docRef);
      if (productSnap.exists()) {
        const product = productSnap.data();
        
        // Delete images from storage
        if (product.images && Array.isArray(product.images)) {
          await this.deleteProductImages(product.images);
        }
      }
      
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  // Upload product images to Firebase Storage
  async uploadProductImages(imageFiles) {
    try {
      const uploadPromises = imageFiles.map(async (file) => {
        const timestamp = Date.now();
        const fileName = `products/${timestamp}_${file.name}`;
        const storageRef = ref(storage, fileName);
        
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      });

      return await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Error uploading images:", error);
      throw error;
    }
  },

  // Delete product images from Firebase Storage
  async deleteProductImages(imageUrls) {
    try {
      const deletePromises = imageUrls.map(async (url) => {
        try {
          const imageRef = ref(storage, url);
          await deleteObject(imageRef);
        } catch (error) {
          console.warn("Could not delete image:", url, error);
        }
      });

      await Promise.all(deletePromises);
    } catch (error) {
      console.error("Error deleting images:", error);
    }
  }
};

// Category Management
export const categoryService = {
  // Get all categories
  async getAllCategories() {
    try {
      const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
      const categories = {};
      
      querySnapshot.docs.forEach(doc => {
        const data = doc.data();
        categories[doc.id] = data.subcategories || [];
      });
      
      // Return default categories if none exist
      if (Object.keys(categories).length === 0) {
        return {
          appliances: ['refrigerator', 'air-conditioner'],
          mobiles: ['apple', 'vivo', 'oppo', 'realme', 'oneplus', 'motorola'],
          electronics: ['home-theater', 'sound-bar'],
          tv: ['toshiba', 'mi', 'realme', 'samsung', 'lg', 'assembled-tv', 'tcl'],
          trending: ['best-sellers', 'new-arrivals']
        };
      }
      
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Return default categories on error
      return {
        appliances: ['refrigerator', 'air-conditioner'],
        mobiles: ['apple', 'vivo', 'oppo', 'realme', 'oneplus', 'motorola'],
        electronics: ['home-theater', 'sound-bar'],
        tv: ['toshiba', 'mi', 'realme', 'samsung', 'lg', 'assembled-tv', 'tcl'],
        trending: ['best-sellers', 'new-arrivals']
      };
    }
  },

  // Add or update category
  async saveCategory(categoryName, subcategories) {
    try {
      const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
      const docRef = doc(db, CATEGORIES_COLLECTION, categoryId);
      
      await setDoc(docRef, {
        name: categoryName,
        subcategories: subcategories,
        updatedAt: Timestamp.now()
      });
      
      return { success: true };
    } catch (error) {
      console.error("Error saving category:", error);
      throw error;
    }
  },

  // Delete category
  async deleteCategory(categoryName) {
    try {
      const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
      const docRef = doc(db, CATEGORIES_COLLECTION, categoryId);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  }
};
