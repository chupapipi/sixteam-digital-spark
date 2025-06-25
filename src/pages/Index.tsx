import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MessageCircle, Target, Settings, Brain, Headphones, CheckCircle, Star, Zap, Bot } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  const [carouselApi, setCarouselApi] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20para%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  // Auto-scroll del carrusel cada 2 segundos (solo cuando esté visible)
  useEffect(() => {
    if (!carouselApi) return;

    // Observer para detectar cuando el carrusel está visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              carouselApi.scrollNext();
            }, 2000);

            // Limpiar cuando el carrusel no esté visible
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.1 }
    );

    const carouselElement = document.querySelector('[data-carousel="main"]');
    if (carouselElement) {
      observer.observe(carouselElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [carouselApi]);

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

  const partnerLogos = [
    {
      name: 'HubSpot',
      src: '/logos/HubSpot-Logo-500x281.png',
      alt: 'HubSpot CRM'
    },
    {
      name: 'Make',
      src: '/logos/make-logo.png',
      alt: 'Make Automation'
    },
    {
      name: 'ManyChat',
      src: '/logos/MANYCHAT-LOGO-PNG.png',
      alt: 'ManyChat Chatbots'
    },
    {
      name: 'n8n',
      src: '/logos/N8n-logo-new.svg.png',
      alt: 'n8n Workflow Automation'
    },
    {
      name: 'Zapier',
      src: '/logos/zapier-logo-new.png',
      alt: 'Zapier Automation'
    },
    {
      name: 'Brevo',
      src: '/logos/brevo.png',
      alt: 'Brevo Email Marketing'
    },
    {
      name: 'Google Ads',
      src: '/logos/Google_Ads_logo.svg.png',
      alt: 'Google Ads'
    },
    {
      name: 'Meta Ads',
      src: '/logos/ads meta_PNG12.png',
      alt: 'Meta Facebook Ads'
    },
    {
      name: 'Google Analytics',
      src: '/logos/Logo_Google_Analytics.svg.png',
      alt: 'Google Analytics'
    },
    {
      name: 'WhatsApp Business',
      src: '/logos/Whatsapp-Business-01-768x269.png',
      alt: 'WhatsApp Business API'
    },
    {
      name: 'Mailchimp',
      src: '/logos/Mailchimp-logo.png',
      alt: 'Mailchimp Email Marketing'
    },
    {
      name: 'GoHighLevel',
      src: '/logos/highlevel-logo.png',
      alt: 'GoHighLevel CRM'
    },
    {
      name: 'Kommo',
      src: '/logos/kommo01.png',
      alt: 'Kommo CRM'
    },
    {
      name: 'Google Gemini',
      src: '/logos/Google_Gemini_logo.svg.png',
      alt: 'Google Gemini AI'
    },
    {
      name: 'AtomChat',
      src: '/logos/logo-atom-chat.png',
      alt: 'AtomChat Live Chat'
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
      
      {/* Hero Section Profesional */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden pt-8">
        {/* Fondo base con color específico */}
        <div className="absolute inset-0 bg-[#0a2342]"></div>
        
        {/* Gradiente central para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/90 via-[#0a2342]/60 to-[#0a2342]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2342]/70 via-transparent to-[#0a2342]/70"></div>
        
        {/* Círculos pequeños animados de fondo - Reducidos para mejor rendimiento */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({length: 15}).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-[#00bfa5]/20 animate-pulse ${i > 9 ? 'hidden md:block' : ''}`}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 1}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Líneas de luz dinámicas - Optimizadas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Líneas horizontales de datos - Reducidas */}
          {Array.from({length: 3}).map((_, i) => (
            <div
              key={`h-${i}`}
              className={`absolute h-px bg-gradient-to-r from-transparent via-[#00bfa5]/30 to-transparent animate-pulse ${i > 1 ? 'hidden lg:block' : ''}`}
              style={{
                top: `${30 + i * 20}%`,
                left: '-20%',
                width: '140%',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `rotate(${Math.random() * 4 - 2}deg)`
              }}
            ></div>
          ))}
          
          {/* Líneas verticales - Reducidas */}
          {Array.from({length: 2}).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#1d70a2]/20 to-transparent animate-pulse hidden lg:block"
              style={{
                left: `${30 + i * 40}%`,
                top: '-10%',
                height: '120%',
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            ></div>
          ))}
          
          {/* Nodos de conexión - Reducidos */}
          {Array.from({length: 6}).map((_, i) => (
            <div
              key={`node-${i}`}
              className={`absolute w-2 h-2 rounded-full bg-[#00bfa5]/40 animate-ping ${i > 3 ? 'hidden lg:block' : ''}`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`
              }}
            ></div>
          ))}
          
          {/* Efectos de partículas - Reducidos */}
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute w-1 h-1 bg-[#00bfa5]/60 rounded-full animate-ping ${i > 4 ? 'hidden lg:block' : ''}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Efecto de flujo de datos en movimiento */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-[#00bfa5]/20 to-transparent transform -rotate-12 animate-pulse" 
               style={{
                 top: '30%',
                 left: '-50%',
                 width: '200%',
                 animationDuration: '3s'
               }}></div>
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#1d70a2]/30 to-transparent transform rotate-12 animate-pulse" 
               style={{
                 top: '60%',
                 left: '-50%',
                 width: '200%',
                 animationDuration: '4s',
                 animationDelay: '1s'
               }}></div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-0">
            
            {/* Etiqueta profesional */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gray-800/70 border border-gray-600/50 rounded-full backdrop-blur-sm">
              <img 
                src="/LOGO.png" 
                alt="Sixteam Logo" 
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <span className="text-gray-200 font-medium text-xs sm:text-sm tracking-wide">Sixteam</span>
            </div>

            {/* Título principal profesional */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight px-4 sm:px-0">
                <span className="text-white">¿Tus procesos de marketing</span>
                <br />
                <span className="text-gray-300">y ventas te están</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  impidiendo crecer?
                </span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-0">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Multiplica tu ROI con Revenue Operations + IA
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  En Sixteam combinamos Procesos, Tecnología y Personas para que puedas enfocarte en el crecimiento de tu negocio
                </p>
              </div>
            </div>

            {/* CTA Button único a WhatsApp */}
            <div className="flex justify-center items-center pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-0">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 max-w-sm sm:max-w-none"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base lg:text-lg">Análisis Estratégico Ejecutivo (Gratis)</span>
              </Button>
            </div>

            {/* Métricas específicas RevOps + IA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-0">
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-400">40%</div>
                <div className="text-gray-300 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Reducción CAC (Customer Acquisition Cost)</div>
                <div className="text-gray-500 text-xs">vs. procesos manuales tradicionales</div>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-400">3.2x</div>
                <div className="text-gray-300 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Incremento en Lead-to-Customer Rate</div>
                <div className="text-gray-500 text-xs">con scoring predictivo + nurturing IA</div>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 sm:col-span-2 lg:col-span-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-400">85%</div>
                <div className="text-gray-300 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Automatización Sales Pipeline</div>
                <div className="text-gray-500 text-xs">desde lead capture hasta customer success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema de IA - Sección Profesional */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Título de sección para C-Level */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-gray-700 font-medium text-xs sm:text-sm tracking-wide">VENTAJA COMPETITIVA DECISIVA</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight px-4 sm:px-0">
              Revenue Operations
              <br />
              <span className="text-blue-600">Impulsado por IA</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transformamos la operación digital de tu empresa con tecnología que conecta todas tus áreas, reduce costos y te permite tomar decisiones inteligentes en tiempo real.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Implementamos procesos avanzados, desde la calificación automática de leads hasta la gestión proactiva de clientes, para que aumentes el valor de cada cliente y bajes tus costos de adquisición.
              </p>
            </div>
          </div>
          
          {/* Grid de servicios profesionales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Profesional */}
          <div className="text-center px-4 sm:px-0">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl max-w-md sm:max-w-none"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base lg:text-lg">Consultoría C-Level: ROI & Growth Strategy</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Herramientas y Tecnologías */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gray-50 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-teal-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 font-medium text-xs sm:text-sm tracking-wide">TECNOLOGÍAS LÍDERES</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight px-4 sm:px-0">
              Herramientas que
              <br />
              <span className="text-blue-600">Utilizamos</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Trabajamos con las mejores plataformas y herramientas del mercado para garantizar 
                resultados excepcionales en tu transformación digital.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Cada herramienta está cuidadosamente seleccionada para maximizar 
                el rendimiento y la escalabilidad de tu operación.
              </p>
            </div>
          </div>
          
          {/* Carrusel de logos */}
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
              data-carousel="main"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerLogos.map((logo, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                    <div className="p-1">
                      <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                        <CardContent className="flex items-center justify-center p-4 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            decoding="async"
                            className="object-contain hover:scale-110 transition-all duration-300"
                            style={{
                              maxWidth: '100px',
                              maxHeight: '70px',
                              width: '80%',
                              height: '80%'
                            }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
          
          {/* CTA de herramientas */}
          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-md sm:max-w-none"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base lg:text-lg">Conoce Nuestras Integraciones</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas Empresariales */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gray-900 overflow-hidden">
        {/* Fondo sutil empresarial */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Título profesional */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/60 border border-gray-600/40 rounded-full">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-200 font-medium text-xs sm:text-sm tracking-wide">VENTAJA COMPETITIVA</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
                <span className="text-white">Lo que nos hace</span>
                <br />
                <span className="text-blue-400">Únicos en el Mercado</span>
              </h2>
            </div>

            {/* Grid empresarial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Lado izquierdo - Texto principal */}
              <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">RevOps + IA Enterprise</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    No solo implementamos tecnología, creamos ecosistemas inteligentes que aprenden, 
                    se adaptan y evolucionan con tu negocio. Metodología que combina Revenue Operations 
                    con inteligencia artificial de nivel empresarial.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Arquitectura Escalable</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Diseñamos infraestructuras tecnológicas que crecen contigo. Desde startups hasta 
                    enterprise, nuestras soluciones se escalan automáticamente según tus necesidades.
                  </p>
                </div>
              </div>
              
              {/* Lado derecho - Lista de ventajas */}
              <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-600/40 rounded-lg hover:border-blue-400/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium text-base sm:text-lg">
                      {advantage}
                    </span>
                  </div>
                ))}
                
                {/* CTA especial */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800/60 border border-gray-600/40 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">¿Listo para la transformación?</h4>
                      <p className="text-gray-300 text-sm sm:text-base">Agenda una consultoría estratégica gratuita</p>
                    </div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Empezar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Elite */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-16 sm:w-32 h-16 sm:h-32 border border-blue-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-24 sm:w-48 h-24 sm:h-48 border border-gray-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '30s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-green-50 border border-green-200 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium text-xs sm:text-sm">Resultados Verificados</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              <span className="text-gray-900">Transformaciones</span>
              <br />
              <span className="text-blue-600">de Alto Impacto</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
              Empresas líderes confían en nosotros para revolucionar sus operaciones 
              con inteligencia artificial y automatización de vanguardia.
            </p>
          </div>
          
          {/* Grid de testimonios premium */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Card principal */}
                <div className="relative bg-white border border-gray-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  
                  {/* Header con estrellas y badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                      VERIFICADO
                    </div>
                  </div>
                  
                  {/* Quote con diseño elegante */}
                  <div className="relative mb-8">
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
                    <p className="text-lg text-gray-700 leading-relaxed italic relative z-10 pl-8">
                      {testimonial.text}
                    </p>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif rotate-180">"</div>
                  </div>
                  
                  {/* Información del cliente con avatar */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Línea decorativa */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA final poderoso */}
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Quieres ser el próximo caso de éxito?
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Únete a empresas líderes que ya están dominando su mercado con IA
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all shadow-xl"
              >
                Comenzar Mi Transformación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Elite */}
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Fondo futurista */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-950/30 to-teal-950/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Sección principal del footer */}
          <div className="py-16 border-b border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Logo y descripción */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <span className="text-2xl font-bold text-white">Sixteam.pro</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Elite AI Automation Agency. Transformamos empresas con inteligencia artificial 
                  de vanguardia y automatización enterprise.
                </p>
                <div className="flex gap-4">
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    🏆 ELITE AGENCY
                  </div>
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    🤖 AI SPECIALISTS
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Servicios Premium</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>IA Conversacional GPT-4</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Hiperrautomatización</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>RevOps + IA</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Stack Tecnológico Total</span>
                  </div>
                </div>
              </div>

              {/* CTA Final */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    ¿Listo para dominar tu mercado?
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Consultoría estratégica gratuita para evaluar tu potencial con IA
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transform hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultoría Gratuita
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright y links */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Sixteam.pro - Elite AI Automation Agency. Todos los derechos reservados.
              </div>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
                <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Sistema Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
