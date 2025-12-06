import React, { useState } from 'react';

export default function ProductManagement() {
	const [activeTab, setActiveTab] = useState('products'); // products, subsections, categories
	const [selectedCategory, setSelectedCategory] = useState('appliances');
	const [selectedSubcategory, setSelectedSubcategory] = useState('refrigerator');
	const [formData, setFormData] = useState({
		title: '',
		price: '',
		rating: '',
		description: '',
		images: []
	});
	const [newSubsectionData, setNewSubsectionData] = useState({
		category: 'appliances',
		name: ''
	});
	const [newCategoryData, setNewCategoryData] = useState({
		name: '',
		description: ''
	});
	const [categories, setCategories] = useState({});
	const [allProducts, setAllProducts] = useState([]);

	const defaultCategories = {
		appliances: ['refrigerator', 'air-conditioner'],
		mobiles: ['apple', 'vivo', 'oppo', 'realme', 'oneplus', 'motorola'],
		electronics: ['home-theater', 'sound-bar'],
		tv: ['toshiba', 'mi', 'realme', 'samsung', 'lg', 'assembled-tv', 'tcl'],
		trending: ['best-sellers', 'new-arrivals']
	};

	const currentCategories = Object.keys(categories).length > 0 ? categories : defaultCategories;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleCategoryChange = (e) => {
		const newCategory = e.target.value;
		setSelectedCategory(newCategory);
		setSelectedSubcategory(currentCategories[newCategory][0]);
	};

	const handleImageUpload = (e) => {
		const files = Array.from(e.target.files);
		files.forEach(file => {
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData(prev => ({
					...prev,
					images: [...prev.images, reader.result]
				}));
			};
			reader.readAsDataURL(file);
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title || !formData.price || formData.images.length === 0) {
			alert('Please fill all required fields and upload at least one image');
			return;
		}

		const productData = {
			id: Date.now(),
			category: selectedCategory,
			subcategory: selectedSubcategory,
			...formData,
			price: parseFloat(formData.price),
			rating: parseFloat(formData.rating) || 0,
			images: formData.images
		};

		setAllProducts([...allProducts, productData]);
		console.log('New Product:', productData);
		alert('Product added successfully!');
		
		// Reset form
		setFormData({
			title: '',
			price: '',
			rating: '',
			description: '',
			images: []
		});
	};

	const handleAddSubsection = (e) => {
		e.preventDefault();
		if (!newSubsectionData.name.trim()) {
			alert('Please enter a subsection name');
			return;
		}

		const updatedCategories = { ...currentCategories };
		const subsectionName = newSubsectionData.name.toLowerCase().replace(/\s+/g, '-');
		
		if (!updatedCategories[newSubsectionData.category]) {
			updatedCategories[newSubsectionData.category] = [];
		}
		
		if (updatedCategories[newSubsectionData.category].includes(subsectionName)) {
			alert('This subsection already exists');
			return;
		}

		updatedCategories[newSubsectionData.category].push(subsectionName);
		setCategories(updatedCategories);
		
		console.log('New Subsection Added:', {
			category: newSubsectionData.category,
			subsection: subsectionName
		});
		alert(`Subsection "${subsectionName}" added to ${newSubsectionData.category}!`);
		
		setNewSubsectionData({ category: newSubsectionData.category, name: '' });
	};

	const handleRemoveSubsection = (category, subsection) => {
		if (window.confirm(`Remove "${subsection}" from ${category}?`)) {
			const updatedCategories = { ...currentCategories };
			updatedCategories[category] = updatedCategories[category].filter(s => s !== subsection);
			setCategories(updatedCategories);
			alert(`Subsection "${subsection}" removed!`);
		}
	};

	const handleAddCategory = (e) => {
		e.preventDefault();
		if (!newCategoryData.name.trim()) {
			alert('Please enter a category name');
			return;
		}

		const categoryName = newCategoryData.name.toLowerCase().replace(/\s+/g, '-');
		const updatedCategories = { ...currentCategories };
		
		if (updatedCategories[categoryName]) {
			alert('This category already exists');
			return;
		}

		updatedCategories[categoryName] = [];
		setCategories(updatedCategories);
		
		console.log('New Category Added:', {
			category: categoryName,
			description: newCategoryData.description
		});
		alert(`Category "${categoryName}" added successfully!`);
		
		setNewCategoryData({ name: '', description: '' });
	};

	const handleRemoveCategory = (category) => {
		if (window.confirm(`Remove category "${category}" and all its subsections?`)) {
			const updatedCategories = { ...currentCategories };
			delete updatedCategories[category];
			setCategories(updatedCategories);
			alert(`Category "${category}" removed!`);
		}
	};

	return (
		<div className="page-shell">
			<h1>Admin Dashboard</h1>
			<p className="text-muted">Manage products, categories, and subsections</p>

			{/* Tabs */}
			<div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #333' }}>
				<button 
					onClick={() => setActiveTab('products')}
					style={{ 
						padding: '0.75rem 1.5rem', 
						backgroundColor: activeTab === 'products' ? '#e71d36' : 'transparent',
						color: activeTab === 'products' ? '#fff' : '#000',
						border: 'none',
						cursor: 'pointer',
						fontWeight: '600',
						fontSize: '0.95rem'
					}}
				>
					Add Products
				</button>
				<button 
					onClick={() => setActiveTab('subsections')}
					style={{ 
						padding: '0.75rem 1.5rem', 
						backgroundColor: activeTab === 'subsections' ? '#e71d36' : 'transparent',
						color: activeTab === 'subsections' ? '#fff' : '#000',
						border: 'none',
						cursor: 'pointer',
						fontWeight: '600',
						fontSize: '0.95rem'
					}}
				>
					Manage Subsections
				</button>
				<button 
					onClick={() => setActiveTab('categories')}
					style={{ 
						padding: '0.75rem 1.5rem', 
						backgroundColor: activeTab === 'categories' ? '#e71d36' : 'transparent',
						color: activeTab === 'categories' ? '#fff' : '#000',
						border: 'none',
						cursor: 'pointer',
						fontWeight: '600',
						fontSize: '0.95rem'
					}}
				>
					Manage Categories
				</button>
			</div>

			{/* TAB 1: Add Products */}
			{activeTab === 'products' && (
				<div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
					{/* Form Section */}
					<div>
						<form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', border: '1px solid #333' }}>
							<h2 style={{ marginTop: 0 }}>Add New Product</h2>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Category *</label>
								<select 
									value={selectedCategory}
									onChange={handleCategoryChange}
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px' }}
								>
									{Object.keys(currentCategories).map(cat => (
										<option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
									))}
								</select>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subcategory *</label>
								<select 
									value={selectedSubcategory}
									onChange={(e) => setSelectedSubcategory(e.target.value)}
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px' }}
								>
									{currentCategories[selectedCategory].map(subcat => (
										<option key={subcat} value={subcat}>{subcat.charAt(0).toUpperCase() + subcat.slice(1).replace('-', ' ')}</option>
									))}
								</select>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Product Title *</label>
								<input 
									type="text"
									name="title"
									value={formData.title}
									onChange={handleInputChange}
									placeholder="Enter product name"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
								/>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Price *</label>
								<input 
									type="number"
									name="price"
									value={formData.price}
									onChange={handleInputChange}
									placeholder="0.00"
									step="0.01"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
								/>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Rating (0-5)</label>
								<input 
									type="number"
									name="rating"
									value={formData.rating}
									onChange={handleInputChange}
									placeholder="0.0"
									min="0"
									max="5"
									step="0.1"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
								/>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Description</label>
								<textarea 
									name="description"
									value={formData.description}
									onChange={handleInputChange}
									placeholder="Enter product description"
									rows="4"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem', fontFamily: 'inherit' }}
								/>
							</div>

							<div style={{ marginBottom: '1.5rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Product Images *</label>
								<input
									type="file"
									accept="image/*"
									multiple
									onChange={handleImageUpload}
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px' }}
								/>
								<p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>Recommended: 400x400px, JPG or PNG. You can select multiple images.</p>
							</div>

							<button 
								type="submit"
								style={{ 
									width: '100%', 
									padding: '0.7rem', 
									backgroundColor: '#e71d36', 
									color: '#fff', 
									border: 'none', 
									borderRadius: '4px',
									fontWeight: '600',
									cursor: 'pointer',
									fontSize: '0.95rem'
								}}
							>
								Add Product
							</button>
						</form>
					</div>

					{/* Preview Section */}
					<div>
						<h2>Product Preview</h2>
						<div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', border: '1px solid #333' }}>
							<div style={{
								backgroundColor: '#fff',
								border: '1px solid #ddd',
								borderRadius: '4px',
								overflow: 'hidden',
								textAlign: 'center'
							}}>
								{formData.images.length > 0 ? (
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '1rem' }}>
										{formData.images.map((image, index) => (
											<img
												key={index}
												src={image}
												alt={`Product preview ${index + 1}`}
												style={{ width: 'calc(50% - 0.25rem)', height: '120px', objectFit: 'contain', border: '1px solid #eee', borderRadius: '4px' }}
											/>
										))}
									</div>
								) : (
									<div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
										No images selected
									</div>
								)}
							</div>

							<div style={{ marginTop: '1rem' }}>
								<h3 style={{ margin: '0.5rem 0', color: '#000' }}>{formData.title || 'Product Name'}</h3>
							<p style={{ margin: '0.5rem 0', color: '#e71d36', fontSize: '1.2rem', fontWeight: '700' }}>
								₹{formData.price || '0.00'}
							</p>
								<p style={{ margin: '0.5rem 0', color: '#e71d36', fontSize: '0.9rem' }}>
									{'★'.repeat(Math.floor(formData.rating))} {formData.rating ? `(${formData.rating})` : '(0)'}
								</p>
								<p style={{ margin: '0.5rem 0', color: '#555', fontSize: '0.9rem' }}>
									{formData.description || 'Product description will appear here'}
								</p>
							</div>

							<div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem', color: '#555' }}>
								<p><strong>Category:</strong> {selectedCategory}</p>
								<p><strong>Subcategory:</strong> {selectedSubcategory}</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* TAB 2: Manage Subsections */}
			{activeTab === 'subsections' && (
				<div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
					{/* Add Subsection Form */}
					<div>
						<form onSubmit={handleAddSubsection} style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', border: '1px solid #333' }}>
							<h2 style={{ marginTop: 0 }}>Add New Subsection</h2>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Select Category *</label>
								<select 
									value={newSubsectionData.category}
									onChange={(e) => setNewSubsectionData({ ...newSubsectionData, category: e.target.value })}
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px' }}
								>
									{Object.keys(currentCategories).map(cat => (
										<option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
									))}
								</select>
							</div>

							<div style={{ marginBottom: '1.5rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subsection Name *</label>
								<input 
									type="text"
									value={newSubsectionData.name}
									onChange={(e) => setNewSubsectionData({ ...newSubsectionData, name: e.target.value })}
									placeholder="e.g., iPhone, iPad, Apple Watch"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
								/>
								<p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>Name will be converted to lowercase with hyphens</p>
							</div>

							<button 
								type="submit"
								style={{ 
									width: '100%', 
									padding: '0.7rem', 
									backgroundColor: '#e71d36', 
									color: '#fff', 
									border: 'none', 
									borderRadius: '4px',
									fontWeight: '600',
									cursor: 'pointer',
									fontSize: '0.95rem'
								}}
							>
								Add Subsection
							</button>
						</form>
					</div>

					{/* Existing Subsections */}
					<div>
						<h2>Existing Subsections</h2>
						<div style={{ maxHeight: '600px', overflowY: 'auto' }}>
							{Object.entries(currentCategories).map(([category, subs]) => (
								<div key={category} style={{ marginBottom: '1.5rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '4px', border: '1px solid #333' }}>
									<h3 style={{ margin: '0 0 0.5rem 0', color: '#e71d36' }}>{category.toUpperCase()}</h3>
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
										{subs.map(sub => (
											<div key={sub} style={{ backgroundColor: '#e71d36', color: '#fff', padding: '0.5rem 0.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
												<span>{sub}</span>
												<button 
													onClick={() => handleRemoveSubsection(category, sub)}
													style={{ 
														backgroundColor: 'rgba(255,255,255,0.3)',
														border: 'none',
														color: '#fff',
														cursor: 'pointer',
														padding: '0.2rem 0.4rem',
														borderRadius: '2px',
														fontSize: '0.8rem'
													}}
												>
													✕
												</button>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* TAB 3: Manage Categories */}
			{activeTab === 'categories' && (
				<div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
					{/* Add Category Form */}
					<div>
						<form onSubmit={handleAddCategory} style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', border: '1px solid #333' }}>
							<h2 style={{ marginTop: 0 }}>Add New Category</h2>

							<div style={{ marginBottom: '1rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Category Name *</label>
								<input 
									type="text"
									value={newCategoryData.name}
									onChange={(e) => setNewCategoryData({ ...newCategoryData, name: e.target.value })}
									placeholder="e.g., Computers, Home & Kitchen"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem' }}
								/>
								<p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>Name will be converted to lowercase with hyphens</p>
							</div>

							<div style={{ marginBottom: '1.5rem' }}>
								<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Description</label>
								<textarea 
									value={newCategoryData.description}
									onChange={(e) => setNewCategoryData({ ...newCategoryData, description: e.target.value })}
									placeholder="Optional: Brief description of the category"
									rows="3"
									style={{ width: '100%', padding: '0.5rem', border: '1px solid #333', borderRadius: '4px', fontSize: '0.9rem', fontFamily: 'inherit' }}
								/>
							</div>

							<button 
								type="submit"
								style={{ 
									width: '100%', 
									padding: '0.7rem', 
									backgroundColor: '#e71d36', 
									color: '#fff', 
									border: 'none', 
									borderRadius: '4px',
									fontWeight: '600',
									cursor: 'pointer',
									fontSize: '0.95rem'
								}}
							>
								Add Category
							</button>
						</form>
					</div>

					{/* Existing Categories */}
					<div>
						<h2>Existing Categories ({Object.keys(currentCategories).length})</h2>
						<div style={{ display: 'grid', gap: '1rem', maxHeight: '600px', overflowY: 'auto' }}>
							{Object.entries(currentCategories).map(([category, subs]) => (
								<div key={category} style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '4px', border: '1px solid #333' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
										<div style={{ flex: 1 }}>
											<h3 style={{ margin: '0 0 0.5rem 0', color: '#000' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
											<p style={{ margin: '0.3rem 0', color: '#666', fontSize: '0.9rem' }}>📦 {subs.length} subsections</p>
											<div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
												{subs.map(sub => (
													<span key={sub} style={{ backgroundColor: '#e71d36', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '2px', fontSize: '0.75rem' }}>
														{sub}
													</span>
												))}
											</div>
										</div>
										<button 
											onClick={() => handleRemoveCategory(category)}
											style={{ 
												backgroundColor: '#e71d36',
												border: 'none',
												color: '#fff',
												cursor: 'pointer',
												padding: '0.5rem 0.75rem',
												borderRadius: '4px',
												fontSize: '0.9rem',
												fontWeight: '600',
												marginLeft: '1rem'
											}}
										>
											Delete
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Statistics Section */}
			<div style={{ marginTop: '2rem', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', border: '1px solid #333', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
				<div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e71d36', textAlign: 'center' }}>
					<p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>📦 Total Products</p>
					<h3 style={{ margin: 0, color: '#e71d36', fontSize: '2rem' }}>{allProducts.length}</h3>
				</div>
				<div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e71d36', textAlign: 'center' }}>
					<p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>📁 Total Categories</p>
					<h3 style={{ margin: 0, color: '#e71d36', fontSize: '2rem' }}>{Object.keys(currentCategories).length}</h3>
				</div>
				<div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e71d36', textAlign: 'center' }}>
					<p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>🏷️ Total Subsections</p>
					<h3 style={{ margin: 0, color: '#e71d36', fontSize: '2rem' }}>{Object.values(currentCategories).reduce((sum, subs) => sum + subs.length, 0)}</h3>
				</div>
			</div>
		</div>
	);
}
