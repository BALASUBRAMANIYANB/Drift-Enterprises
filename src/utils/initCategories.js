import { ref as dbRef, set } from "firebase/database";
import { database } from "../config/firebase";

const categories = {
  appliances: ['refrigerator', 'air-conditioner', 'washing-machine', 'microwave'],
  mobiles: ['apple', 'vivo', 'oppo', 'realme', 'oneplus', 'motorola', 'poco', 'samsung'],
  electronics: ['home-theater', 'sound-bar', 'speakers', 'headphones'],
  tv: ['toshiba', 'mi', 'realme', 'samsung', 'lg', 'assembled-tv', 'tcl'],
  trending: ['best-sellers', 'new-arrivals', 'hot-deals']
};

export async function initCategories() {
  try {
    const categoriesRef = dbRef(database, 'categories');
    await set(categoriesRef, categories);
    console.log('✅ Categories initialized successfully!');
    return { success: true };
  } catch (error) {
    console.error('❌ Error initializing categories:', error);
    throw error;
  }
}
