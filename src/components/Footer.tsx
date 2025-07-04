import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleServiceClick = (service: any) => {
    if (service.name === 'Consultoría Estratégica') {
      handleWhatsAppClick();
    } else {
      scrollToSection(service.sectionId);
    }
  };

  const services = [
    {
      name: 'Consultoría Estratégica',
      sectionId: 'servicio-consultoria-estrategica',
      isWhatsApp: true
    },
    {
      name: 'Implementación de CRM',
      sectionId: 'servicio-implementacion-de-crm',
      isWhatsApp: false
    },
    {
      name: 'Soluciones de IA',
      sectionId: 'servicio-soluciones-de-ia',
      isWhatsApp: false
    },
    {
      name: 'Implementaciones de Chatbot',
      sectionId: 'soluciones-especializadas',
      isWhatsApp: false
    },
    {
      name: 'Operación y Mantenimiento',
      sectionId: 'servicio-operacion-y-mantenimiento',
      isWhatsApp: false
    }
  ];

  return (
    <footer className="gradient-bg text-white font-lato">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png" 
                alt="Sixteam.pro Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-poppins font-bold">Sixteam.pro</span>
            </div>
            <p className="text-gray-200 mb-4">
              Transformamos tu negocio con IA y automatización. Combinamos procesos, tecnología y personas para impulsar tu crecimiento digital.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-sixteam-teal hover:bg-sixteam-teal/80 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors glow-button"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sixteam-teal" />
                <span className="text-gray-200">alpha@sixteam.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-sixteam-teal" />
                <span className="text-gray-200">+57 302 351 5392</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sixteam-teal" />
                <span className="text-gray-200">Colombia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-200">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-left text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer hover:underline"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2024 Sixteam.pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
