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
      
      {/* Hero Section Profesional */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden pt-8">
        {/* Fondo sutil y profesional */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, rgba(16, 120, 120, 0.06) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Grid sutil de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Elementos dinámicos flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Líneas de datos flotantes */}
          {Array.from({length: 3}).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"
              style={{
                top: `${25 + i * 20}%`,
                left: '-50%',
                width: '200%',
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 1.5}s`
              }}
            ></div>
          ))}
          
          {/* Círculos flotantes */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border border-teal-400/20 rounded-full animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          
          {/* Partículas de datos */}
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-7xl mx-auto space-y-16">
            
            {/* Etiqueta profesional */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/70 border border-gray-600/50 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-gray-200 font-medium text-sm tracking-wide">PARA CEOs · CTOs · COOs</span>
            </div>

            {/* Título principal profesional */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Multiplica tu ROI</span>
                <br />
                <span className="text-gray-300">con</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Revenue Operations + IA
                </span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-6 pt-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Reduce costos operacionales hasta 35% mientras escalas ingresos de forma sostenible.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Sistema integral que automatiza ventas, marketing y operaciones para empresas 
                  que buscan dominar su mercado con ventaja tecnológica decisiva.
                </p>
              </div>
            </div>

            {/* CTA Button único a WhatsApp */}
            <div className="flex justify-center items-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Análisis Estratégico Ejecutivo (Gratis)
              </Button>
            </div>

            {/* Métricas específicas RevOps + IA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 pb-16">
              <div className="text-center space-y-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-5xl md:text-6xl font-bold text-blue-400">40%</div>
                <div className="text-gray-300 text-sm tracking-wide uppercase font-medium">Reducción CAC (Customer Acquisition Cost)</div>
                <div className="text-gray-500 text-xs">vs. procesos manuales tradicionales</div>
              </div>
              <div className="text-center space-y-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-5xl md:text-6xl font-bold text-teal-400">3.2x</div>
                <div className="text-gray-300 text-sm tracking-wide uppercase font-medium">Incremento en Lead-to-Customer Rate</div>
                <div className="text-gray-500 text-xs">con scoring predictivo + nurturing IA</div>
              </div>
              <div className="text-center space-y-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-5xl md:text-6xl font-bold text-blue-400">85%</div>
                <div className="text-gray-300 text-sm tracking-wide uppercase font-medium">Automatización Sales Pipeline</div>
                <div className="text-gray-500 text-xs">desde lead capture hasta customer success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Efecto de ondas en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)"/>
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)"/>
              </linearGradient>
            </defs>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#waveGradient)"/>
          </svg>
        </div>
      </section>

      {/* Ecosistema de IA - Sección Profesional */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Título de sección para C-Level */}
          <div className="text-center mb-20 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 border border-gray-200 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-gray-700 font-medium text-sm tracking-wide">VENTAJA COMPETITIVA DECISIVA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Revenue Operations
              <br />
              <span className="text-blue-600">Impulsado por IA</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Arquitectura tecnológica enterprise que elimina silos, optimiza márgenes 
                y acelera el crecimiento con decisiones basadas en datos en tiempo real.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Desde lead scoring predictivo hasta customer success automatizado, 
                cada proceso está diseñado para maximizar LTV y minimizar CAC.
              </p>
            </div>
          </div>
          
          {/* Grid de servicios profesionales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            
            {/* Card 1 - IA Conversacional */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-4 py-2 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full tracking-wide">
                    ENTERPRISE
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Qualification Engine</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Sistema IA que identifica y cualifica prospects de alto valor, reduce CAC 
                  y aumenta conversion rates con scoring predictivo empresarial.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Predictive lead scoring + intent data</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Integración total CRM/Sales stack</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>ROI tracking y attribution modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Automatización */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-4 py-2 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full tracking-wide">
                    AVANZADO
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence Engine</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Automatización inteligente que elimina ineficiencias operacionales, 
                  reduce costos estructurales y libera capital humano para iniciativas estratégicas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span>Process mining + workflow optimization</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span>Enterprise integrations + APIs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Performance dashboards + KPI monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Integraciones */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full tracking-wide">
                    PERSONALIZADO
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Growth Platform</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Plataforma unificada que conecta todos los sistemas empresariales, 
                  genera insights accionables y acelera la toma de decisiones estratégicas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Unified data layer + single source of truth</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Executive dashboards + revenue attribution</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Predictive analytics + growth forecasting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Profesional */}
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="px-12 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Consultoría C-Level: ROI & Growth Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Metodología Empresarial */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 font-medium text-sm tracking-wide">METODOLOGÍA EMPRESARIAL</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Proceso de
              <br />
              <span className="text-blue-600">Transformación Integral</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Metodología probada que garantiza resultados medibles en cada fase 
                de tu transformación digital empresarial.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Desde la evaluación inicial hasta la implementación completa, 
                acompañamos cada etapa con expertise técnico y estratégico.
              </p>
            </div>
          </div>
          
          {/* Proceso en pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Número de paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Línea de conexión (excepto el último) */}
                    {index < services.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA de proceso */}
          <div className="text-center mt-16">
            <Button 
              onClick={handleWhatsAppClick}
              className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Iniciar Transformación Empresarial
            </Button>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas Empresariales */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Fondo sutil empresarial */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Título profesional */}
            <div className="text-center mb-20 space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/60 border border-gray-600/40 rounded-full">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-200 font-medium text-sm tracking-wide">VENTAJA COMPETITIVA</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">Lo que nos hace</span>
                <br />
                <span className="text-blue-400">Únicos en el Mercado</span>
              </h2>
            </div>

            {/* Grid empresarial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Lado izquierdo - Texto principal */}
              <div className="space-y-8">
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">RevOps + IA Enterprise</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    No solo implementamos tecnología, creamos ecosistemas inteligentes que aprenden, 
                    se adaptan y evolucionan con tu negocio. Metodología que combina Revenue Operations 
                    con inteligencia artificial de nivel empresarial.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Arquitectura Escalable</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Diseñamos infraestructuras tecnológicas que crecen contigo. Desde startups hasta 
                    enterprise, nuestras soluciones se escalan automáticamente según tus necesidades.
                  </p>
                </div>
              </div>
              
              {/* Lado derecho - Lista de ventajas */}
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-600/40 rounded-lg hover:border-blue-400/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium text-lg">
                      {advantage}
                    </span>
                  </div>
                ))}
                
                {/* CTA especial */}
                <div className="mt-8 p-6 bg-gray-800/60 border border-gray-600/40 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">¿Listo para la transformación?</h4>
                      <p className="text-gray-300">Agenda una consultoría estratégica gratuita</p>
                    </div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
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
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-32 h-32 border border-blue-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
                        <div className="absolute bottom-16 left-16 w-48 h-48 border border-gray-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '30s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">Resultados Verificados</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Transformaciones</span>
              <br />
                              <span className="text-blue-600">
                  de Alto Impacto
                </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
