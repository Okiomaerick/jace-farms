import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaPhone, FaEnvelope, FaLeaf, FaSeedling, FaTractor, FaVial } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample product data with category-specific details
const productData = {
  // Day-Old Chicks
  1: {
    id: 1,
    name: 'Day-Old Chicks',
    category: 'Poultry',
    price: 'KSh 100',
    unit: 'per chick',
    description: 'High-quality, vaccinated day-old chicks for your poultry farming needs. Our chicks are sourced from the best hatcheries and come with vaccination records.',
    features: [
      'Disease-resistant breeds',
      'Fully vaccinated',
      'Fast-growing',
      'High survival rate',
      'Available in large quantities',
      'Delivery available'
    ],
    details: {
      breeds: ['Kroiler', 'Layers', 'Kienyeji'],
      minimumOrder: '100 chicks',
      delivery: 'Nationwide delivery available',
      support: '24/7 technical support',
      warranty: '48-hour health guarantee'
    },
    icon: <FaSeedling className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/day-old-chicks.jpg',
    gallery: [
      '/images/products/day-old-chicks-1.jpg',
      '/images/products/day-old-chicks-2.jpg',
      '/images/products/day-old-chicks-3.jpg'
    ]
  },
  
  // Poultry Feed
  2: {
    id: 2,
    name: 'Poultry Feed',
    category: 'Animal Feed',
    price: 'From KSh 3,200',
    unit: 'per 50kg bag',
    description: 'Premium quality poultry feed formulated for optimal growth, health, and egg production. Our feeds are made from high-quality ingredients to ensure your birds get the best nutrition.',
    features: [
      'Complete and balanced nutrition',
      'Various formulations for different growth stages',
      'Enhanced with essential vitamins and minerals',
      'Promotes healthy growth and egg production',
      'Improved feed conversion ratio',
      'Available in different package sizes'
    ],
    details: {
      types: [
        { name: 'Chick Mash (0-8 weeks)', price: 'KSh 3,200/50kg' },
        { name: 'Growers Mash (9-18 weeks)', price: 'KSh 3,100/50kg' },
        { name: 'Layers Mash (19+ weeks)', price: 'KSh 3,300/50kg' },
        { name: 'Broiler Starter (0-4 weeks)', price: 'KSh 3,400/50kg' },
        { name: 'Broiler Finisher (5-8 weeks)', price: 'KSh 3,300/50kg' },
        { name: 'Poultry Concentrate (for mixing)', price: 'KSh 4,500/50kg' }
      ],
      benefits: [
        'Promotes rapid growth and weight gain',
        'Enhances egg production and quality',
        'Improves feathering and pigmentation',
        'Boosts immune system',
        'Reduces mortality rates',
        'Cost-effective feeding solution'
      ],
      delivery: 'Nationwide delivery available',
      support: 'Free feeding program consultation',
      warranty: 'Quality guaranteed'
    },
    icon: <FaLeaf className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/poultry-feed.jpg',
    gallery: [
      '/images/products/poultry-feed-1.jpg',
      '/images/products/poultry-feed-2.jpg',
      '/images/products/poultry-feed-3.jpg'
    ]
  },

  // Fertilizers
  3: {
    id: 3,
    name: 'Fertilizers',
    category: 'Crop Inputs',
    price: 'From KSh 2,800',
    unit: 'per 50kg bag',
    description: 'High-quality organic and chemical fertilizers to boost your crop yields. Our fertilizers are specially formulated for Kenyan soil conditions.',
    features: [
      'Balanced NPK ratios',
      'Organic options available',
      'Improves soil fertility',
      'Various formulations',
      'Suitable for all crops',
      'Fast absorption'
    ],
    details: {
      types: [
        { name: 'CAN (Calcium Ammonium Nitrate)', price: 'KSh 3,200/50kg' },
        { name: 'DAP (Diammonium Phosphate)', price: 'KSh 3,500/50kg' },
        { name: 'NPK 23:23:0', price: 'KSh 3,800/50kg' },
        { name: 'UREA', price: 'KSh 3,000/50kg' },
        { name: 'Organic Manure', price: 'KSh 1,500/50kg' }
      ],
      application: 'Our agronomists can provide application guidelines',
      delivery: 'Nationwide delivery available',
      support: 'Free soil testing available'
    },
    icon: <FaLeaf className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/fertilizers.jpg',
    gallery: [
      '/images/products/fertilizers-1.jpg',
      '/images/products/fertilizers-2.jpg',
      '/images/products/fertilizers-3.jpg'
    ]
  },
  4: {
    id: 3,
    name: 'Farming Equipment',
    category: 'Machinery',
    price: 'Varies by equipment',
    unit: '',
    description: 'High-quality farming equipment and machinery to make your farming operations more efficient and productive.',
    features: [
      'Durable construction',
      'After-sales support',
      'Maintenance services',
      'Warranty available',
      'Installation support',
      'Spare parts available'
    ],
    details: {
      categories: [
        {
          name: 'Poultry Equipment',
          items: [
            'Automatic drinkers',
            'Feeders',
            'Brooders',
            'Nest boxes',
            'Egg incubators',
            'Pluckers'
          ]
        },
        {
          name: 'Irrigation Equipment',
          items: [
            'Drip lines',
            'Sprinklers',
            'Water pumps',
            'Filtration systems',
            'Valves and fittings'
          ]
        },
        {
          name: 'Tractors & Implements',
          items: [
            'Compact tractors',
            'Plows',
            'Harrows',
            'Planters',
            'Trailers'
          ]
        }
      ],
      delivery: 'Delivery and installation available',
      support: 'Training and maintenance services',
      warranty: '1-2 years warranty on equipment'
    },
    icon: <FaTractor className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/equipment.jpg',
    gallery: [
      '/images/products/equipment-1.jpg',
      '/images/products/equipment-2.jpg',
      '/images/products/equipment-3.jpg'
    ]
  },
  // Farming Equipment
  4: {
    id: 4,
    name: 'Farming Equipment',
    category: 'Machinery',
    price: 'Varies by equipment',
    unit: '',
    description: 'High-quality farming equipment and machinery to make your farming operations more efficient and productive.',
    features: [
      'Durable and reliable equipment',
      'Suitable for small to large scale farming',
      'Low maintenance requirements',
      'Energy efficient',
      'Easy to operate',
      'After-sales support available'
    ],
    details: {
      categories: [
        {
          name: 'Poultry Equipment',
          items: [
            'Automatic feeders and drinkers',
            'Brooders and heaters',
            'Nest boxes',
            'Egg incubators',
            'Poultry cages and coops'
          ]
        },
        {
          name: 'Irrigation Equipment',
          items: [
            'Drip irrigation kits',
            'Sprinkler systems',
            'Water pumps',
            'Fertilizer injectors',
            'Irrigation controllers'
          ]
        },
        {
          name: 'Tractors & Implements',
          items: [
            'Compact tractors',
            'Plows and harrows',
            'Planters and seeders',
            'Sprayers',
            'Trailers'
          ]
        }
      ],
      delivery: 'Delivery and installation available',
      support: 'Training and maintenance services',
      warranty: '1-2 years warranty on equipment'
    },
    icon: <FaTractor className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/equipment.jpg',
    gallery: [
      '/images/products/equipment-1.jpg',
      '/images/products/equipment-2.jpg',
      '/images/products/equipment-3.jpg'
    ]
  },

  // Veterinary Medicines
  5: {
    id: 5,
    name: 'Veterinary Medicines',
    category: 'Animal Health',
    price: 'Varies by product',
    unit: '',
    description: 'Comprehensive range of veterinary medicines and supplements to keep your livestock healthy and productive.',
    features: [
      'Vaccines for all livestock',
      'Dewormers',
      'Antibiotics',
      'Vitamin supplements',
      'Wound care',
      'Dairy hygiene products'
    ],
    details: {
      categories: [
        {
          name: 'Poultry Medicines',
          items: [
            'Gumboro vaccine',
            'Newcastle vaccine',
            'Coccidiostats',
            'Liver tonics',
            'Growth promoters'
          ]
        },
        {
          name: 'Livestock Medicines',
          items: [
            'Foot and mouth vaccine',
            'Anthrax vaccine',
            'Dewormers',
            'Tick and flea control',
            'Mastitis treatment'
          ]
        },
        {
          name: 'Supplements',
          items: [
            'Mineral licks',
            'Vitamin premixes',
            'Electrolytes',
            'Probiotics',
            'Bloat treatment'
          ]
        }
      ],
      delivery: 'Nationwide delivery available',
      support: 'Veterinary consultation available',
      warranty: 'All products from licensed manufacturers'
    },
    icon: <FaVial className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/vet-medicines.jpg',
    gallery: [
      '/images/products/vet-medicines-1.jpg',
      '/images/products/vet-medicines-2.jpg',
      '/images/products/vet-medicines-3.jpg'
    ]
  },
  
  // Seeds
  6: {
    id: 6,
    name: 'Seeds',
    category: 'Crop Inputs',
    price: 'From KSh 500',
    unit: 'per kg',
    description: 'High-quality certified seeds for various crops, carefully selected for high yield and disease resistance. Our seeds are ideal for Kenyan climate and soil conditions.',
    features: [
      'Certified and high germination rate',
      'Disease-resistant varieties',
      'High-yielding hybrids',
      'Suitable for local conditions',
      'Available in different package sizes',
      'Seasonal varieties available'
    ],
    details: {
      categories: [
        {
          name: 'Cereal Seeds',
          items: [
            'Maize (DH04, H614, H6213)',
            'Wheat (Eagle 10, Njoro BW1)',
            'Rice (Basmati 370, BW 196)',
            'Barley (Sabini, Nguzo)'
          ]
        },
        {
          name: 'Vegetable Seeds',
          items: [
            'Tomatoes (Anna F1, Rambo F1)',
            'Kales (Sukuma wiki)',
            'Cabbages (Gloria F1, Pundamilia)',
            'Onions (Red Creole, Texas Grano)'
          ]
        },
        {
          name: 'Legume Seeds',
          items: [
            'Beans (Rosecoco, Mwitemania)',
            'Green grams (N26, Nylon)',
            'Cowpeas (K80, M66)',
            'Soybeans (Gazelle, SB19)'
          ]
        }
      ],
      delivery: 'Nationwide delivery available',
      support: 'Free agronomic advice',
      warranty: 'Germination guarantee'
    },
    icon: <FaSeedling className="h-8 w-8 text-green-600" />,
    backgroundImage: '/images/products/seeds.jpg',
    gallery: [
      '/images/products/seeds-1.jpg',
      '/images/products/seeds-2.jpg',
      '/images/products/seeds-3.jpg'
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id] || productData[1]; // Fallback to first product if not found

  // Format price for display
  const formatPrice = (price) => {
    if (!price) return 'Contact for pricing';
    const [amount, unit] = price.split(' / ');
    return (
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">{amount}</span>
        {unit && <span className="ml-2 text-lg text-gray-600">/ {unit}</span>}
      </div>
    );
  };

  const whatsappMessage = `Hello Jace Farms, I'm interested in your ${product.name}. Can you provide more information?`;
  const whatsappUrl = `https://wa.me/254743304659?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:+254743304659`;
  const emailUrl = `mailto:info@jacefarms.co.ke?subject=Inquiry about ${encodeURIComponent(product.name)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Images */}
            <div className="mb-8 lg:mb-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.backgroundImage} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery && product.gallery.map((img, index) => (
                  <div key={index} className="bg-gray-100 rounded-md overflow-hidden h-24">
                    <img 
                      src={img} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pl-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {product.category}
                </span>
              </div>
              
              <div className="mb-6">
                {formatPrice(product.price)}
              </div>

              <div className="mb-8">
                <p className="text-gray-700 text-lg">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category-Specific Details */}
              {product.details && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {product.name} Details
                  </h3>
                  
                  {/* Poultry Specific Details */}
                  {product.details.breeds && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Breeds</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.details.breeds.map((breed, index) => (
                          <div key={index} className="flex items-center bg-gray-50 p-3 rounded-md">
                            <FaSeedling className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-gray-800">{breed}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fertilizer Specific Details */}
                  {product.details.types && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Types & Prices</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {product.details.types.map((type, index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {type.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {type.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Equipment Categories */}
                  {product.details.categories && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Equipment Categories</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.details.categories.map((category, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-green-600 px-4 py-3">
                              <h5 className="text-white font-medium">{category.name}</h5>
                            </div>
                            <div className="p-4">
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2"></span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* General Product Details */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.details.delivery && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Delivery</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.delivery}</dd>
                        </div>
                      )}
                      {product.details.support && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Support</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.support}</dd>
                        </div>
                      )}
                      {product.details.warranty && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Warranty</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.warranty}</dd>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={phoneUrl}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaPhone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                  <a
                    href={emailUrl}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {Object.values(productData)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={relatedProduct.backgroundImage}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/products/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                    <p className="mt-2 text-base font-medium text-green-600">
                      {relatedProduct.price}
                      {relatedProduct.unit && <span className="text-sm text-gray-500"> / {relatedProduct.unit}</span>}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
