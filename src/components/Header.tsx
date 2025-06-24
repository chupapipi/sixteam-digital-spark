

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
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
        'Operación y Mantenimiento'
      ]
    },
    { name: 'Casos de Éxito', path: '/casos-exito' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20para%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-lato">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png" 
              alt="Sixteam.pro Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-poppins font-bold text-sixteam-navy">
              Sixteam.pro
            </span>
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
                  className={`flex items-center text-sm font-medium transition-colors hover:text-sixteam-blue ${
                    isActive(item.path) ? 'text-sixteam-blue' : 'text-sixteam-navy'
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
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white glow-button"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-sixteam-navy" />
            ) : (
              <Menu className="w-6 h-6 text-sixteam-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-sixteam-blue ${
                    isActive(item.path) ? 'text-sixteam-blue' : 'text-sixteam-navy'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
