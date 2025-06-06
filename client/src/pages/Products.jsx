import { useState } from 'react';
import { FaShoppingCart, FaLeaf, FaSeedling, FaTractor, FaVial } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Day-Old Chicks',
    category: 'Poultry',
    price: 'KSh 100',
    unit: 'per chick',
    description: 'High-quality, vaccinated day-old chicks for your poultry farming needs.',
    features: [
      'Disease-resistant breeds',
      'Fully vaccinated',
      'Fast-growing',
      'High survival rate'
    ],
    icon: <FaSeedling className="h-8 w-8 text-green-600" />
  },
  {
    id: 2,
    name: 'Poultry Feed',
    category: 'Animal Feed',
    price: 'KSh 3,200',
    unit: 'per 50kg bag',
    description: 'Nutritionally balanced feed for all stages of poultry growth.',
    features: [
      'Complete nutrition',
      'Various formulations',
      'Promotes healthy growth',
      'High-quality ingredients'
    ],
    icon: <FaLeaf className="h-8 w-8 text-green-600" />
  },
  {
    id: 3,
    name: 'Fertilizers',
    category: 'Crop Inputs',
    price: 'From KSh 2,800',
    unit: 'per 50kg bag',
    description: 'Organic and chemical fertilizers for optimal crop growth.',
    features: [
      'Balanced NPK',
      'Organic options',
      'Improves soil fertility',
      'Various formulations'
    ],
    icon: <FaLeaf className="h-8 w-8 text-green-600" />
  },
  {
    id: 4,
    name: 'Veterinary Medicines',
    category: 'Animal Health',
    price: 'Varies',
    unit: 'per item',
    description: 'Essential veterinary medicines and supplements for livestock health.',
    features: [
      'Vaccines',
      'Dewormers',
      'Antibiotics',
      'Vitamin supplements'
    ],
    icon: <FaVial className="h-8 w-8 text-green-600" />
  },
  {
    id: 5,
    name: 'Farming Equipment',
    category: 'Machinery',
    price: 'Varies',
    unit: 'per item',
    description: 'Quality tools and equipment for efficient farming operations.',
    features: [
      'Durable construction',
      'Ergonomic design',
      'Various sizes',
      'Maintenance services'
    ],
    icon: <FaTractor className="h-8 w-8 text-green-600" />
  },
  {
    id: 6,
    name: 'Seeds',
    category: 'Crop Inputs',
    price: 'From KSh 500',
    unit: 'per kg',
    description: 'Certified seeds for various crops including maize, beans, and vegetables.',
    features: [
      'High germination rate',
      'Disease-resistant',
      'High-yielding',
      'Suitable for local conditions'
    ],
    icon: <FaSeedling className="h-8 w-8 text-green-600" />
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1589923846901-d9de691f7d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Farm products"
          />
          <div className="absolute inset-0 bg-green-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Products
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            High-quality agricultural inputs and supplies for modern farming.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <select
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mx-auto mb-4">
                      {product.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        {product.unit && (
                          <span className="text-sm text-gray-500"> / {product.unit}</span>
                        )}
                      </div>
                      <p className="mt-3 text-base text-gray-500">{product.description}</p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                      <ul className="mt-2 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <FaShoppingCart className="-ml-1 mr-2 h-5 w-5" />
                      Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any products matching your search. Try adjusting your filters.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
