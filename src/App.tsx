import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Instagram, Facebook, Twitter, Menu as MenuIcon, Mail, X } from 'lucide-react';

// Menu data
const menuItems = {
  pizzas: [
    { name: "Papa's Special Chicken Pizza", price: "Rs. 899", description: "Our signature pizza with special marinated chicken" },
    { name: "Pepperoni Supreme", price: "Rs. 799", description: "Classic pepperoni with extra cheese" },
    { name: "Vegetarian Delight", price: "Rs. 699", description: "Fresh vegetables and mushrooms" },
    { name: "BBQ Chicken", price: "Rs. 849", description: "Tender BBQ chicken with onions" },
    { name: "Hawaiian", price: "Rs. 799", description: "Ham and pineapple classic" },
    { name: "Meat Lovers", price: "Rs. 999", description: "Loaded with various meats and extra cheese" },
    { name: "Mushroom Special", price: "Rs. 749", description: "Three types of mushrooms with truffle oil" },
    { name: "Spicy Chicken", price: "Rs. 849", description: "Hot and spicy chicken with jalapeños" }
  ],
  coffee: [
    { name: "Espresso", price: "Rs. 199", description: "Strong and pure" },
    { name: "Cappuccino", price: "Rs. 249", description: "Classic Italian style" },
    { name: "Latte", price: "Rs. 249", description: "Smooth and creamy" },
    { name: "Americano", price: "Rs. 199", description: "Rich and bold" },
    { name: "Mocha", price: "Rs. 299", description: "Coffee with chocolate" },
    { name: "Cold Brew", price: "Rs. 279", description: "Smooth cold extracted coffee" }
  ],
  biryani: [
    { name: "Chicken Biryani", price: "Rs. 399", description: "Aromatic basmati rice with tender chicken" },
    { name: "Mutton Biryani", price: "Rs. 499", description: "Rich and flavorful mutton biryani" },
    { name: "Veg Biryani", price: "Rs. 299", description: "Mixed vegetables with fragrant rice" },
    { name: "Special Hyderabadi Biryani", price: "Rs. 549", description: "Authentic Hyderabadi style" }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToContact = () => {
    setActiveSection('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-3xl font-bold text-white cursor-pointer" onClick={() => handleNavigation('home')}>Papa's Pizza</div>
        <div className="hidden md:flex space-x-8 text-white">
          <button onClick={() => handleNavigation('menu')} className="hover:text-yellow-400 transition-all duration-300 hover:scale-105">Menu</button>
          <button onClick={scrollToContact} className="hover:text-yellow-400 transition-all duration-300 hover:scale-105">About</button>
          <button onClick={() => handleNavigation('contact')} className="hover:text-yellow-400 transition-all duration-300 hover:scale-105">Contact</button>
        </div>
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-95 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center pt-20 space-y-8">
            <button 
              onClick={() => handleNavigation('menu')} 
              className="text-white text-xl hover:text-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Menu
            </button>
            <button 
              onClick={scrollToContact} 
              className="text-white text-xl hover:text-yellow-400 transition-all duration-300 hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="text-white text-xl hover:text-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16">
        {activeSection === 'home' && (
          <>
            {/* Hero Section */}
            <header className="relative h-screen">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
                  alt="Pizza hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Delicious Pizza
                </h1>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-110 mb-8 animate-bounce"
                >
                  Visit Us Now
                </button>
                <p className="text-xl text-white max-w-2xl">
                  Hand-crafted with love. Experience the taste of Naples in every bite.
                </p>
              </div>
            </header>

            {/* Features Section */}
            <section className="py-20 px-6 lg:px-12 bg-white">
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">Fast and Delicious</h3>
                  <p className="text-gray-600">Prepared by expert chefs with passion and expertise</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
                  <p className="text-gray-600">Find us in Pathao Food and Foodmandu</p>
                </div>
                <div className="text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">Located in Lalitpur, Jawalakhel</p>
                </div>
              </div>
            </section>

            {/* Popular Pizzas */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50">
              <h2 className="text-4xl font-bold text-center mb-12">Our Popular Pizzas</h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Papa's Special Chicken Pizza",
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
                    price: "Rs. 899"
                  },
                  {
                    name: "Pepperoni Supreme",
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
                    price: "Rs. 799"
                  },
                  {
                    name: "Vegetarian Delight",
                    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80",
                    price: "Rs. 699"
                  }
                ].map((pizza, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                      <p className="text-yellow-400 font-bold">{pizza.price}</p>
                      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                        Full Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection === 'menu' && (
          <section className="min-h-screen relative">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80"
                alt="Menu background"
                className="w-full h-full object-cover fixed"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="relative z-10 py-20 px-6 lg:px-12">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in">Our Menu</h2>
                
                {/* Pizzas */}
                <div className="mb-16">
                  <h3 className="text-2xl font-semibold mb-6 text-white animate-fade-in">Pizzas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {menuItems.pizzas.map((item, index) => (
                      <div key={index} className="menu-item bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="text-gray-300 mt-2">{item.description}</p>
                        <p className="text-yellow-400 font-bold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Biryani */}
                <div className="mb-16">
                  <h3 className="text-2xl font-semibold mb-6 text-white animate-fade-in">Biryani</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {menuItems.biryani.map((item, index) => (
                      <div key={index} className="menu-item bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="text-gray-300 mt-2">{item.description}</p>
                        <p className="text-yellow-400 font-bold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coffee */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-white animate-fade-in">Coffee</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {menuItems.coffee.map((item, index) => (
                      <div key={index} className="menu-item bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="text-gray-300 mt-2">{item.description}</p>
                        <p className="text-yellow-400 font-bold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="min-h-screen relative">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80"
                alt="Contact background"
                className="w-full h-full object-cover fixed"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="relative z-10 py-20 px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-white animate-fade-in">Contact Us</h2>
                <div className="grid gap-8">
                  <div className="contact-item bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                    <a 
                      href="tel:+9771234567890" 
                      className="flex items-center justify-center gap-4 hover:text-yellow-400 transition-duration-300"
                    >
                      <Phone className="w-8 h-8 text-yellow-400" />
                      <p className="text-2xl text-white hover:text-yellow-400">+977 1234567890</p>
                    </a>
                  </div>
                  <div className="contact-item bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center justify-center gap-4">
                      <Mail className="w-8 h-8 text-yellow-400" />
                      <p className="text-2xl text-white">contact@papaspizza.com</p>
                    </div>
                  </div>
                  <div className="contact-item bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex justify-center gap-8">
                      <a 
                        href="https://www.facebook.com/profile.php?id=61563824227661" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                      >
                        <Facebook className="w-10 h-10" />
                      </a>
                      <a 
                        href="https://www.instagram.com/papas.pizza28/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                      >
                        <Instagram className="w-10 h-10" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer id="contact" className="bg-black text-white py-12 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Papa's Pizza</h3>
              <p className="text-gray-400">Serving the best pizza</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Team</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">CEO - Mr. ABC</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Manager - Mr. CDE</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Head Chef - Mr. FGH</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Kitchen Helper - Mr. YRI</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">More Staff</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Cashier - Mr. EHID</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Barista - Mr. HDJD</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-gray-400">Waiter - Mr. HDJD</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61563824227661" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.instagram.com/papas.pizza28/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 Papa's Pizza. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;