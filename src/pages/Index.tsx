import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { MessageCircle, Target, Settings, Brain, Headphones, CheckCircle, Star, Zap, Bot } from 'lucide-react';
import Footer from '@/components/Footer';
import ChatSection from '@/components/ChatSection';

const Index = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['comerciales', 'de marketing', 'de servicio'];

  // Cargar animaciones después de que la página esté completamente cargada
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
    }, 1000); // Delay de 1 segundo después de que se monte el componente

    return () => clearTimeout(timer);
  }, []);

  // Inicializar el efecto typewriter
  useEffect(() => {
    // Pequeño delay antes de empezar a escribir
    const initTimer = setTimeout(() => {
      setDisplayText('');
    }, 1500);

    return () => clearTimeout(initTimer);
  }, []);

  // Efecto typewriter para escribir y borrar palabras
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo letra a letra
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Palabra completa, esperar y luego empezar a borrar
          setTimeout(() => setIsDeleting(true), 1500); // Pausa de 1.5s con palabra completa
        }
      } else {
        // Borrando letra a letra (más rápido)
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Palabra borrada completamente, cambiar a siguiente palabra
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100); // Borrar más rápido (50ms) que escribir (100ms)

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  // Efecto para dibujar líneas de conexión dinámicas entre puntos
  useEffect(() => {
    if (!animationsLoaded) return;

    const canvas = document.getElementById('connectionLines') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Función para obtener posición de un punto en cualquier momento
    const getPointPosition = (pointIndex: number, time: number) => {
      const rect = canvas.getBoundingClientRect();
      const basePositions = [
        { x: 0.15 * canvas.width, y: 0.20 * canvas.height },  // Punto 1
        { x: 0.80 * canvas.width, y: 0.70 * canvas.height },  // Punto 2
        { x: 0.70 * canvas.width, y: 0.40 * canvas.height },  // Punto 3
        { x: 0.25 * canvas.width, y: 0.60 * canvas.height },  // Punto 4
        { x: 0.50 * canvas.width, y: 0.30 * canvas.height },  // Punto 5
      ];

      const base = basePositions[pointIndex];
      let offset = { x: 0, y: 0 };

      // Calcular offset basado en la animación CSS
      switch (pointIndex) {
        case 0: // movePoint1 - 12s
          const progress1 = (time % 12000) / 12000;
          if (progress1 < 0.25) {
            const t = progress1 / 0.25;
            offset = { x: 100 * t, y: 50 * t };
          } else if (progress1 < 0.5) {
            const t = (progress1 - 0.25) / 0.25;
            offset = { x: 100 + 100 * t, y: 50 - 80 * t };
          } else if (progress1 < 0.75) {
            const t = (progress1 - 0.5) / 0.25;
            offset = { x: 200 - 150 * t, y: -30 + 110 * t };
          } else {
            const t = (progress1 - 0.75) / 0.25;
            offset = { x: 50 - 50 * t, y: 80 - 80 * t };
          }
          break;
        case 1: // movePoint2 - 15s
          const progress2 = (time % 15000) / 15000;
          if (progress2 < 0.2) {
            const t = progress2 / 0.2;
            offset = { x: -80 * t, y: -60 * t };
          } else if (progress2 < 0.4) {
            const t = (progress2 - 0.2) / 0.2;
            offset = { x: -80 - 70 * t, y: -60 + 100 * t };
          } else if (progress2 < 0.6) {
            const t = (progress2 - 0.4) / 0.2;
            offset = { x: -150 + 100 * t, y: 40 - 60 * t };
          } else if (progress2 < 0.8) {
            const t = (progress2 - 0.6) / 0.2;
            offset = { x: -50 - 70 * t, y: -20 + 50 * t };
          } else {
            const t = (progress2 - 0.8) / 0.2;
            offset = { x: -120 + 120 * t, y: 30 - 30 * t };
          }
          break;
        case 2: // movePoint3 - 10s
          const progress3 = (time % 10000) / 10000;
          if (progress3 < 0.33) {
            const t = progress3 / 0.33;
            offset = { x: -100 * t, y: 70 * t };
          } else if (progress3 < 0.66) {
            const t = (progress3 - 0.33) / 0.33;
            offset = { x: -100 + 180 * t, y: 70 - 120 * t };
          } else {
            const t = (progress3 - 0.66) / 0.34;
            offset = { x: 80 - 80 * t, y: -50 + 50 * t };
          }
          break;
        case 3: // movePoint4 - 18s
          const progress4 = (time % 18000) / 18000;
          if (progress4 < 0.16) {
            const t = progress4 / 0.16;
            offset = { x: 120 * t, y: -40 * t };
          } else if (progress4 < 0.32) {
            const t = (progress4 - 0.16) / 0.16;
            offset = { x: 120 - 40 * t, y: -40 + 100 * t };
          } else if (progress4 < 0.48) {
            const t = (progress4 - 0.32) / 0.16;
            offset = { x: 80 - 140 * t, y: 60 + 20 * t };
          } else if (progress4 < 0.64) {
            const t = (progress4 - 0.48) / 0.16;
            offset = { x: -60 - 60 * t, y: 80 - 110 * t };
          } else if (progress4 < 0.8) {
            const t = (progress4 - 0.64) / 0.16;
            offset = { x: -120 + 160 * t, y: -30 - 30 * t };
          } else {
            const t = (progress4 - 0.8) / 0.2;
            offset = { x: 40 - 40 * t, y: -60 + 60 * t };
          }
          break;
        case 4: // movePoint5 - 8s
          const progress5 = (time % 8000) / 8000;
          if (progress5 < 0.25) {
            const t = progress5 / 0.25;
            offset = { x: -70 * t, y: -50 * t };
          } else if (progress5 < 0.5) {
            const t = (progress5 - 0.25) / 0.25;
            offset = { x: -70 + 160 * t, y: -50 + 90 * t };
          } else if (progress5 < 0.75) {
            const t = (progress5 - 0.5) / 0.25;
            offset = { x: 90 - 130 * t, y: 40 + 30 * t };
          } else {
            const t = (progress5 - 0.75) / 0.25;
            offset = { x: -40 + 40 * t, y: 70 - 70 * t };
          }
          break;
      }

      return { x: base.x + offset.x, y: base.y + offset.y };
    };

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now();
      const points = [];
      
      // Obtener posiciones actuales de todos los puntos
      for (let i = 0; i < 5; i++) {
        points.push(getPointPosition(i, time));
      }

      // Dibujar líneas entre puntos cercanos
      ctx.strokeStyle = '#00bfa5';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.sqrt(
            Math.pow(points[i].x - points[j].x, 2) + 
            Math.pow(points[i].y - points[j].y, 2)
          );
          
          // Solo dibujar líneas si los puntos están lo suficientemente cerca
          if (distance < 300) {
            ctx.globalAlpha = Math.max(0.1, 0.4 - distance / 1000);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animationsLoaded]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20para%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };
  
    // Auto-scroll del carrusel cada 8 segundos (solo cuando esté visible)
    useEffect(() => {
      if (!carouselApi) return;

      // Observer para detectar cuando el carrusel está visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const interval = setInterval(() => {
                carouselApi.scrollNext();
              }, 8000);

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
      src: '/HubSpot-Logo-500x281.png',
      alt: 'HubSpot CRM'
    },
    {
      name: 'Make',
      src: '/make-logo.png',
      alt: 'Make Automation'
    },
    {
      name: 'ManyChat',
      src: '/MANYCHAT-LOGO-PNG.png',
      alt: 'ManyChat Chatbots'
    },
    {
      name: 'n8n',
      src: '/N8n-logo-new.svg.png',
      alt: 'n8n Workflow Automation'
    },
    {
      name: 'Zapier',
      src: '/zapier-logo-new.png',
      alt: 'Zapier Automation'
    },
    {
      name: 'Brevo',
      src: '/brevo.png',
      alt: 'Brevo Email Marketing'
    },
    {
      name: 'Google Ads',
      src: '/Google_Ads_logo.svg.png',
      alt: 'Google Ads'
    },
    {
      name: 'Meta Ads',
      src: '/ads meta_PNG12.png',
      alt: 'Meta Facebook Ads'
    },
    {
      name: 'Google Analytics',
      src: '/Logo_Google_Analytics.svg.png',
      alt: 'Google Analytics'
    },
    {
      name: 'WhatsApp Business',
      src: '/Whatsapp-Business-01-768x269.png',
      alt: 'WhatsApp Business API'
    },
    {
      name: 'Mailchimp',
      src: '/Mailchimp-logo.png',
      alt: 'Mailchimp Email Marketing'
    },
    {
      name: 'GoHighLevel',
      src: '/highlevel-logo.png',
      alt: 'GoHighLevel CRM'
    },
    {
      name: 'Kommo',
      src: '/kommo01.png',
      alt: 'Kommo CRM'
    },
    {
      name: 'Google Gemini',
      src: '/Google_Gemini_logo.svg.png',
      alt: 'Google Gemini AI'
    },
    {
      name: 'AtomChat',
      src: '/logo-atom-chat.png',
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

  const pilarsOfValue = [
    {
      title: 'Diagnóstico y Estrategia a la Medida',
      description: 'No aplicamos soluciones genéricas, invertimos tiempo en entender tu **operación** desde adentro, mapeando tus **flujos de trabajo** y entrevistando a tu equipo. Así podemos ofrecerte mejoras basadas en nuestra **experiencia** optimizando tu **eficiencia** y **rentabilidad**.'
    },
    {
      title: 'Ecosistema RevOps + IA',
      description: 'Para nosotros, **RevOps** no es un servicio, es la filosofía de alinear **Marketing**, **Ventas** y **Servicio** en una sola máquina de ingresos. Usamos la **IA** no solo para automatizar, sino para crear **ecosistemas** que aprenden, se adaptan y evolucionan contigo, asegurando que tu **inversión** de hoy sea relevante mañana.'
    },
    {
      title: 'Arquitectura Abierta y Escalable',
      description: 'No te atamos a una sola tecnología. Construimos tu solución integrando de forma inteligente las mejores **plataformas** del mercado (**Make**, **n8n**, **Zapier**, etc.) para crear una **arquitectura** que se adapta a ti, no al revés. Diseñamos sistemas que **crecen** contigo, desde pequeña hasta gran empresa.'
    }
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
      <section className="relative bg-[#0a2342] text-white overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
        {/* Fondo base con degradado sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#1d70a2]/20 to-[#0a2342]"></div>
        
        {/* Fondo sólido sin degradado complicado */}
        
        {/* Red de nodos conectados con líneas dinámicas */}
        {animationsLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Nodos principales fijos con animación simple */}
            <div 
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse" 
              style={{ 
                top: '20%', 
                left: '15%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div 
              className="absolute w-3 h-3 bg-[#1d70a2] rounded-full animate-pulse" 
              style={{ 
                top: '70%', 
                left: '80%',
                boxShadow: '0 0 10px rgba(29, 112, 162, 0.8)',
                animation: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div 
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse" 
              style={{ 
                top: '40%', 
                left: '70%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div 
              className="absolute w-3 h-3 bg-[#1d70a2] rounded-full animate-pulse" 
              style={{ 
                top: '60%', 
                left: '25%',
                boxShadow: '0 0 10px rgba(29, 112, 162, 0.8)',
                animation: 'pulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div 
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse hidden md:block" 
              style={{ 
                top: '30%', 
                left: '50%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            
            {/* Líneas conectoras con glow animado */}
            <div 
              className="absolute bg-gradient-to-r from-transparent via-[#00bfa5]/40 to-transparent h-px animate-pulse" 
              style={{ 
                top: '20%', 
                left: '15%', 
                width: '55%', 
                transformOrigin: 'left', 
                transform: 'rotate(8deg)',
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div 
              className="absolute bg-gradient-to-r from-transparent via-[#1d70a2]/40 to-transparent h-px animate-pulse" 
              style={{ 
                top: '40%', 
                left: '70%', 
                width: '25%', 
                transformOrigin: 'left', 
                transform: 'rotate(-45deg)',
                animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            
            {/* Partículas móviles simples */}
            <div 
              className="absolute w-2 h-2 bg-[#00bfa5] rounded-full" 
              style={{ 
                top: '20%', 
                left: '15%',
                boxShadow: '0 0 6px rgba(0, 191, 165, 0.9)',
                animation: 'moveHorizontal1 4s linear infinite'
              }}
            ></div>
            <div 
              className="absolute w-2 h-2 bg-[#1d70a2] rounded-full" 
              style={{ 
                top: '40%', 
                left: '70%',
                boxShadow: '0 0 6px rgba(29, 112, 162, 0.9)',
                animation: 'moveDiagonal1 5s linear infinite'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-[#00bfa5]/80 rounded-full" 
              style={{ 
                top: '10%', 
                left: '30%',
                animation: 'floatUp1 8s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-[#1d70a2]/80 rounded-full" 
              style={{ 
                top: '80%', 
                left: '60%',
                animation: 'floatUp2 10s ease-in-out infinite'
              }}
            ></div>
          </div>
        )}
        
        {/* Líneas de flujo en movimiento continuo - solo cuando las animaciones estén cargadas */}
        {animationsLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00bfa5]/40 to-transparent transform -rotate-12" 
              style={{
                top: '35%',
                left: '-100%',
                width: '300%',
                animation: 'slideRight 8s infinite linear !important'
              }}
            ></div>
            <div 
              className="absolute h-px bg-gradient-to-r from-transparent via-[#1d70a2]/30 to-transparent transform rotate-12" 
              style={{
                top: '65%',
                left: '-100%',
                width: '300%',
                animation: 'slideLeft 10s infinite linear !important',
                animationDelay: '2s'
              }}
            ></div>
            <div 
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00bfa5]/20 to-transparent transform -rotate-6 hidden lg:block" 
              style={{
                top: '50%',
                left: '-100%',
                width: '300%',
                animation: 'slideRight 12s infinite linear !important',
                animationDelay: '4s'
              }}
            ></div>
          </div>
        )}

        {/* Contenido principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 py-8 sm:py-12 lg:py-16">
            
            {/* Etiqueta profesional */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-gray-800/70 border border-gray-600/50 rounded-full backdrop-blur-sm">
              <div className="text-sm sm:text-base lg:text-lg font-bold font-poppins tracking-tight whitespace-nowrap">
                <span className="text-white">Process</span>
                <span className="text-white mx-0.5">+</span>
                <span className="text-white">Technology</span>
                <span className="text-white mx-0.5">+</span>
                <span className="text-blue-400">People</span>
                <span className="text-white mx-0.5">=</span>
                <span className="text-green-400 font-bold">Growth</span>
              </div>
            </div>

            {/* Título principal profesional con animación */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight px-4 sm:px-0">
                <span className="text-white font-extrabold">¿Tus procesos</span>
                <br />
                <span className="text-white">
                  <span 
                    className="inline-block min-w-[200px] sm:min-w-[300px] lg:min-w-[400px] text-center relative"
                  >
                    {displayText}
                    <span className="typewriter-cursor ml-1">|</span>
                  </span> te están
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  impidiendo crecer?
                </span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-0">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
                  Integramos áreas de Marketing, ventas y servicio bajo una estrategia de RevOps potenciada con IA
                </p>
              </div>
            </div>

            {/* CTA Button único a WhatsApp */}
            <div className="flex justify-center items-center pt-3 sm:pt-4 lg:pt-6 px-4 sm:px-0">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 max-w-sm sm:max-w-none"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base lg:text-lg">Solicita un Diagnóstico Inicial SIN COSTO</span>
              </Button>
            </div>


          </div>
        </div>
      </section>

      {/* Sección de Chat con IA Integrada - SIN padding top para continuidad perfecta */}
      <ChatSection />

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
              <div className="text-sm font-bold font-poppins tracking-tight whitespace-nowrap">
                <span className="text-gray-800">Process</span>
                <span className="text-gray-800 mx-1">+</span>
                <span className="text-gray-800">Technology</span>
                <span className="text-gray-800 mx-1">+</span>
                <span className="text-blue-600">People</span>
                <span className="text-gray-800 mx-1">=</span>
                <span className="text-green-600 font-bold">Growth</span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight px-4 sm:px-0">
              Revenue Operations
              <br />
              <span className="text-blue-600">Impulsado por IA</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transformamos tu negocio con estrategia de Operaciones de Ingresos (Revenue Operations) y tecnología que conecta todas tus áreas, reduce costos, optimiza procesos y te permite tomar decisiones informadas en tiempo real.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Implementamos procesos avanzados, desde la calificación automática de leads hasta la gestión proactiva de clientes, para que aumentes el valor de cada cliente y bajes tus costos de adquisición.
              </p>

              {/* Métricas específicas RevOps + IA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-12 px-4 sm:px-0">
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-200">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">40%</div>
                  <div className="text-gray-700 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Reducción CAC (Customer Acquisition Cost)</div>
                  <div className="text-gray-500 text-xs">vs. procesos manuales tradicionales</div>
                </div>
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-200">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600">3.2x</div>
                  <div className="text-gray-700 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Incremento en Lead-to-Customer Rate</div>
                  <div className="text-gray-500 text-xs">con scoring predictivo + nurturing IA</div>
                </div>
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-200 sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">85%</div>
                  <div className="text-gray-700 text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Automatización Sales Pipeline</div>
                  <div className="text-gray-500 text-xs">desde lead capture hasta customer success</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Nueva sección: Nuestro Ciclo de Servicio */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gray-50 overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Título de la nueva sección */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight px-4 sm:px-0">
              Nuestro Ciclo de Servicio para tu
              <br />
              <span className="text-blue-600">Transformación Digital</span>
            </h2>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Entendemos que la verdadera transformación digital no se logra de manera aislada, sino con un socio estratégico que facilite este proceso. Por eso, diseñamos un ciclo de servicio para acompañarte en cada etapa y garantizar el resultado deseado.
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
              <span className="text-sm sm:text-base lg:text-lg">Conoce más sobre estos servicios</span>
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
                duration: 50,
                dragFree: false,
                skipSnaps: false,
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
                        <CardContent className="flex items-center justify-center p-3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            decoding="async"
                            className="object-contain hover:scale-110 transition-all duration-300"
                            style={{
                              maxWidth: '140px',
                              maxHeight: '100px',
                              width: '95%',
                              height: '95%'
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

      {/* Más que implementadores, tus Socios Estratégicos */}
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
                <img 
                  src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png" 
                  alt="Sixteam.pro Logo"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-gray-200 font-medium text-xs sm:text-sm tracking-wide">Sixteam.pro</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
                <span className="text-white">Más que implementadores,</span>
                <br />
                <span className="text-blue-400">tus Socios Estratégicos</span>
              </h2>

              {/* Párrafo introductorio */}
              <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  En el mercado encontrarás muchas empresas que implementan tecnología. Nuestra verdadera diferencia no radica en las herramientas que usamos, sino en cómo nos integramos con tu equipo.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Antes de implementar cualquier <span className="text-blue-400 font-semibold">herramienta tecnológica</span>, nos dedicamos a conocer a fondo los detalles de tus <span className="text-blue-400 font-semibold">procesos</span>, los desafíos del <span className="text-blue-400 font-semibold">personal</span> y tus objetivos estratégicos.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Esto nos permite crear soluciones que se sienten como una extensión de tu propia empresa:
                </p>
              </div>
            </div>

            {/* Grid empresarial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              
              {/* Lado izquierdo - Pilares de Valor */}
              <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Pilares de Valor</h3>
                
                {pilarsOfValue.map((pilar, index) => (
                  <div key={index} className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 sm:p-8">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{pilar.title}</h4>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {pilar.description.split('**').map((part, i) => 
                        i % 2 === 0 ? part : <span key={i} className="text-blue-400 font-semibold">{part}</span>
                      )}
                    </p>
                  </div>
                ))}
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
                  <img 
                    src="/LOGO.png" 
                    alt="Sixteam.pro" 
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-2xl font-bold text-white">Sixteam.pro</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Integramos áreas de Marketing, ventas y servicio bajo una estrategia de RevOps potenciada con IA. 
                  Más que implementadores, somos tus socios estratégicos en transformación digital.
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
                <h3 className="text-xl font-bold text-white">Nuestros Servicios</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Consultoría Estratégica</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Implementación de CRM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Soluciones de IA</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Operación y Mantenimiento</span>
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
                © 2024 Sixteam.pro - Socios Estratégicos en RevOps + IA. Todos los derechos reservados.
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
