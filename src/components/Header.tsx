import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { 
      name: 'Servicios', 
      path: '/servicios',
      submenu: [
        'Consultoría Estratégica',
        'Implementación de CRM',
        'Soluciones de IA',
        'Implementaciones de Chatbot',
        'Operación y Mantenimiento'
      ]
    },
    { name: 'Casos de Éxito', path: '/casos-exito' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50 font-lato opacity-0 pointer-events-none h-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Frase Principal como Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold font-poppins tracking-tight whitespace-nowrap leading-tight">
              <span className="text-white">Process</span>
              <span className="text-white mx-0.5">+</span>
              <span className="text-white">Technology</span>
              <span className="text-white mx-0.5">+</span>
              <span className="text-blue-400">People</span>
              <span className="text-white mx-0.5">=</span>
              <span className="text-green-400 font-bold">Growth</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive(item.path) ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {item.submenu && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50">
                    {item.submenu.map((subItem, index) => (
                      <div key={index} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-sixteam-teal rounded-full"></div>
                          <span className="text-sm text-sixteam-navy hover:text-sixteam-blue transition-colors">
                            {subItem}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 border-t border-gray-700">
            <nav className="flex flex-col space-y-1 pt-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive(item.path) ? 'text-blue-400' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
