
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Settings, Brain, Headphones, CheckCircle, Star, Zap, Bot } from 'lucide-react';
import Header from '@/components/Header';
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sixteam-navy via-sixteam-blue to-sixteam-navy text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hologram' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300bfa5;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%231d70a2;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%230a2342;stop-opacity:0.4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='%230a2342'/%3E%3C!-- Office Environment --%3E%3Crect x='100' y='200' width='1720' height='680' fill='%23f8f9fa' opacity='0.1'/%3E%3C!-- Holographic Monitor --%3E%3Crect x='800' y='300' width='400' height='300' fill='url(%23hologram)' opacity='0.7' rx='10'/%3E%3C!-- Growth Chart --%3E%3Cpath d='M820 550 L860 520 L900 480 L940 440 L980 400 L1020 360 L1060 320 L1100 280 L1140 240 L1180 200' stroke='%2300bfa5' stroke-width='3' fill='none' opacity='0.9'/%3E%3C!-- Data Points --%3E%3Ccircle cx='860' cy='520' r='4' fill='%2300bfa5' opacity='0.9'/%3E%3Ccircle cx='940' cy='440' r='4' fill='%2300bfa5' opacity='0.9'/%3E%3Ccircle cx='1020' cy='360' r='4' fill='%2300bfa5' opacity='0.9'/%3E%3Ccircle cx='1100' cy='280' r='4' fill='%2300bfa5' opacity='0.9'/%3E%3C!-- Flow Diagrams --%3E%3Crect x='820' y='400' width='60' height='20' fill='%231d70a2' opacity='0.6' rx='3'/%3E%3Crect x='900' y='380' width='60' height='20' fill='%231d70a2' opacity='0.6' rx='3'/%3E%3Crect x='980' y='360' width='60' height='20' fill='%231d70a2' opacity='0.6' rx='3'/%3E%3C!-- Connection Lines --%3E%3Cline x1='880' y1='400' x2='900' y2='390' stroke='%2300bfa5' stroke-width='2' opacity='0.7'/%3E%3Cline x1='960' y1='380' x2='980' y2='370' stroke='%2300bfa5' stroke-width='2' opacity='0.7'/%3E%3C!-- Professional Silhouettes --%3E%3Cellipse cx='700' cy='500' rx='40' ry='120' fill='%23ffffff' opacity='0.1'/%3E%3Cellipse cx='1300' cy='480' rx='40' ry='120' fill='%23ffffff' opacity='0.1'/%3E%3C!-- Ambient Light Effects --%3E%3Ccircle cx='1000' cy='400' r='200' fill='%2300bfa5' opacity='0.05'/%3E%3Ccircle cx='1000' cy='400' r='150' fill='%231d70a2' opacity='0.08'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Digital Flow Lines */}
        <div className="flow-lines">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content - Left Side */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                ¿Tus procesos de marketing y ventas te están impidiendo crecer?
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                En Sixteam.pro combinamos Procesos, Tecnología y Personas para que puedas enfocarte en el crecimiento de tu negocio
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto glow-button"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Agenda una cita por WhatsApp
              </Button>
            </div>

            {/* Visual Space - Right Side */}
            <div className="hidden lg:block">
              {/* This space allows the background image to be more visible */}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Transformación Digital con IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementamos inteligencia artificial y automatización avanzada para revolucionar tus procesos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-sixteam-navy mb-3">IA Conversacional</h3>
                <p className="text-gray-600">Chatbots inteligentes que cualifican leads y automatizan el primer contacto</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-sixteam-navy mb-3">Automatización</h3>
                <p className="text-gray-600">Integraciones con Make, n8n y Zapier para flujos de trabajo inteligentes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-sixteam-navy mb-3">Análisis Predictivo</h3>
                <p className="text-gray-600">IA que predice comportamientos y optimiza estrategias de ventas</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-sixteam-blue hover:bg-sixteam-blue/90 text-white glow-button"
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
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Cómo te ayudamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-8 text-center">
              Nuestra Ventaja Competitiva
            </h2>
            <div className="bg-gradient-to-r from-sixteam-blue to-sixteam-teal p-8 rounded-2xl text-white">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Somos especialistas en RevOps con enfoque en IA. No solo implementamos tecnología, creamos ecosistemas inteligentes que aprenden y se adaptan a tu negocio.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600">
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
      <section className="py-20 gradient-bg text-white relative">
        <div className="flow-lines">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio con IA?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Agenda una consulta estratégica y descubre cómo la inteligencia artificial puede impulsar tu crecimiento
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto glow-button"
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
