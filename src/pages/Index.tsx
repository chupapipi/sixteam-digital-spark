import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Settings, Brain, Headphones, CheckCircle, Star, Zap, Bot } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20para%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  const services = [
    {
      icon: Target,
      title: 'Consultoría Estratégica',
      description: 'Analizamos tus procesos con IA para diseñar estrategias personalizadas que optimizen tus operaciones digitales.'
    },
    {
      icon: Settings,
      title: 'Implementación de CRM',
      description: 'Configuramos sistemas CRM inteligentes con automatización avanzada y capacidades de IA integradas.'
    },
    {
      icon: Brain,
      title: 'Soluciones de IA',
      description: 'Desarrollamos herramientas personalizadas con inteligencia artificial que automatizan y optimizan tus procesos.'
    },
    {
      icon: Headphones,
      title: 'Operación y Mantenimiento',
      description: 'Soporte continuo con monitoreo inteligente, actualizaciones automáticas y capacitación especializada.'
    }
  ];

  const advantages = [
    'IA aplicada a procesos de marketing y ventas',
    'Automatización con Make, n8n y Zapier',
    'Integración inteligente entre plataformas',
    'Análisis predictivo y reportería avanzada',
    'Soporte especializado en RevOps'
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'TechStart Solutions',
      text: 'Con Sixteam.pro automatizamos nuestros procesos de ventas usando IA. Aumentamos conversiones 40% y redujimos tiempo manual 60%.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Innovación Digital',
      text: 'La implementación de IA en nuestro CRM transformó completamente cómo gestionamos leads. Resultados extraordinarios en 3 meses.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sixteam-navy via-sixteam-blue to-sixteam-navy text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url("/lovable-uploads/aa8bbfc6-89d0-4c8b-a15f-020477a1e8bd.png")`
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sixteam-navy/80 via-sixteam-navy/60 to-transparent" />
        
        {/* Digital Flow Lines */}
        <div className="flow-lines">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              ¿Tus procesos de marketing y ventas te están impidiendo crecer?
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-lato text-gray-200 leading-relaxed max-w-3xl mx-auto">
              En Sixteam.pro combinamos Procesos, Tecnología y Personas para que puedas enfocarte en el crecimiento de tu negocio
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-lato font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agenda una cita
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V120H1200V0C1200,0 1000,60 600,60C200,60 0,0 0,0Z" fill="white" fillOpacity="0.1"/>
          </svg>
        </div>
      </section>

      {/* IA y Automatización Section */}
      <section className="py-20 bg-gray-50 network-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-sixteam-navy mb-4">
              Transformación Digital con IA
            </h2>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
              Implementamos inteligencia artificial y automatización avanzada para revolucionar tus procesos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-sixteam-navy mb-3">IA Conversacional</h3>
                <p className="font-lato text-gray-600">Chatbots inteligentes que cualifican leads y automatizan el primer contacto</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-sixteam-navy mb-3">Automatización</h3>
                <p className="font-lato text-gray-600">Integraciones con Make, n8n y Zapier para flujos de trabajo inteligentes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-sixteam-navy mb-3">Integraciones de Software</h3>
                <p className="font-lato text-gray-600">Operación sobre Manychat, Brevo, Mailchimp o Kommo para comunicaciones automatizadas optimizando workflows</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-sixteam-blue hover:bg-sixteam-blue/90 text-white glow-button font-lato"
            >
              Descubre cómo transformar tu negocio
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-sixteam-navy mb-4">
              Cómo te ayudamos
            </h2>
            <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
              Servicios diseñados para cada etapa de tu transformación digital con IA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-sixteam-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-lato text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Ventaja Competitiva */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-sixteam-navy mb-8 text-center">
              Nuestra Ventaja Competitiva
            </h2>
            <div className="bg-gradient-to-r from-sixteam-blue to-sixteam-teal p-8 rounded-2xl text-white">
              <p className="text-lg md:text-xl font-lato leading-relaxed mb-6">
                Somos especialistas en RevOps con enfoque en IA. No solo implementamos tecnología, creamos ecosistemas inteligentes que aprenden y se adaptan a tu negocio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sixteam-teal flex-shrink-0" />
                    <span className="font-lato">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-sixteam-navy mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl font-lato text-gray-600">
              Resultados reales de empresas que confiaron en nuestra experiencia en IA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-lato text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-poppins font-semibold text-sixteam-navy">{testimonial.name}</p>
                    <p className="font-lato text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-bg text-white relative">
        <div className="flow-lines">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            ¿Listo para transformar tu negocio con IA?
          </h2>
          <p className="text-xl font-lato mb-8 text-gray-200">
            Agenda una consulta estratégica y descubre cómo la inteligencia artificial puede impulsar tu crecimiento
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto glow-button font-lato"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar Consulta Estratégica
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
