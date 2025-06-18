
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Settings, Code, Headphones, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004567890?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  const services = [
    {
      icon: Target,
      title: 'Consultoría Estratégica',
      description: 'Analizamos tus procesos actuales y diseñamos estrategias personalizadas para optimizar tus operaciones.'
    },
    {
      icon: Settings,
      title: 'Implementación de CRM',
      description: 'Configuramos y personalizamos sistemas CRM que se adapten perfectamente a tu negocio.'
    },
    {
      icon: Code,
      title: 'Desarrollo a Medida',
      description: 'Creamos herramientas digitales personalizadas que resuelven desafíos específicos de tu empresa.'
    },
    {
      icon: Headphones,
      title: 'Operación y Mantenimiento',
      description: 'Brindamos soporte continuo, actualizaciones y capacitación para asegurar el éxito a largo plazo.'
    }
  ];

  const advantages = [
    'Experiencia en diversos sectores industriales',
    'Soluciones flexibles y adaptables',
    'Equipo especializado en RevOps y procesos',
    'Soporte continuo y capacitación',
    'Enfoque en resultados medibles'
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'TechStart Solutions',
      text: 'Sixteam.pro transformó completamente nuestros procesos de ventas. Aumentamos nuestras conversiones en un 40% en solo 4 meses.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Innovación Digital',
      text: 'El equipo de Sixteam entendió perfectamente nuestras necesidades y nos proporcionó una solución que superó nuestras expectativas.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Impulsamos el Crecimiento Digital de tu Negocio Optimizando tus Sistemas de Marketing y Ventas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Combinamos Procesos, Tecnología y Personas para transformar tus operaciones y asegurar tu crecimiento
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Cómo te ayudamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros servicios están diseñados para acompañarte en cada etapa de tu transformación digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-sixteam-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Ventaja Competitiva */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-8 text-center">
              Nuestra Ventaja Competitiva
            </h2>
            <div className="bg-gradient-to-r from-sixteam-blue to-sixteam-teal p-8 rounded-2xl text-white">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Nuestra experiencia en diversos sectores nos permite ofrecer soluciones flexibles y adaptables a los desafíos únicos de tu negocio. No nos limitamos a una industria, nos adaptamos a tu realidad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sixteam-teal flex-shrink-0" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Lo que dicen nuestros clientes sobre su transformación digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-sixteam-navy">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Conversemos sobre cómo podemos impulsar el crecimiento de tu empresa
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Iniciar Conversación
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
