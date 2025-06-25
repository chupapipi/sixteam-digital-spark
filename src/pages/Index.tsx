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
      
      {/* Hero Section Ultra Moderno */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Fondo con partículas y neón */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Grid de fondo futurista */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {Array.from({length: 48}).map((_, i) => (
              <div key={i} className="border border-blue-400/20 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>

        {/* Líneas de datos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({length: 5}).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                width: '200%',
                animationDuration: `${3 + i}s`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto space-y-12">
            
            {/* Etiqueta premium */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-medium">Elite AI Automation Agency</span>
            </div>

            {/* Título principal impactante */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Transformamos
                </span>
                <br />
                <span className="text-white">tu negocio con</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  IA & Automatización
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Implementamos ecosistemas de inteligencia artificial que revolucionan procesos, 
                multiplican resultados y escalan tu empresa al siguiente nivel tecnológico.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Consultoría Gratuita IA
                </div>
              </Button>
              
              <Button 
                variant="outline"
                className="group px-8 py-4 border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span>Ver Casos de Éxito</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </Button>
            </div>

            {/* Métricas impresionantes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">500%</div>
                <div className="text-gray-400">Incremento en ROI promedio</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-400">Automatización inteligente</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">90%</div>
                <div className="text-gray-400">Reducción de tareas manuales</div>
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

      {/* Ecosistema de IA - Premium Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Fondo con partículas */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Título de sección élite */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Tecnología de Vanguardia</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Ecosistema IA
              </span>
              <br />
              <span className="text-white">de Clase Mundial</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Implementamos arquitecturas de inteligencia artificial que transforman completamente 
              la operación de tu empresa, desde la captación hasta la retención de clientes.
            </p>
          </div>
          
          {/* Grid de servicios premium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1 - IA Conversacional */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    AVANZADO
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">IA Conversacional Elite</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Chatbots con GPT-4 que comprenden contexto, cualifican leads perfectamente 
                  y manejan consultas complejas como un experto humano.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Procesamiento de lenguaje natural</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Integración multi-plataforma</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Aprendizaje continuo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Automatización */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                    ENTERPRISE
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Hiperrautomatización</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Flujos de trabajo inteligentes que conectan todas tus herramientas, 
                  eliminan tareas repetitivas y escalan operaciones infinitamente.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Make.com & Zapier Pro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>API personalizada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Monitoreo en tiempo real</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Integraciones */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    CUSTOM
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Stack Tecnológico Total</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Integración completa de CRM, marketing automation, analítica avanzada 
                  y todas las herramientas que necesitas en un ecosistema unificado.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>HubSpot, Salesforce, Pipedrive</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Marketing automation completo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Business Intelligence & BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Premium */}
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-bold text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <span>Implementar Ecosistema IA</span>
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Metodología Élite */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600 font-medium">Metodología Probada</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Proceso de</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Transformación Total
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestra metodología única garantiza resultados medibles en cada fase 
              de tu transformación digital con inteligencia artificial.
            </p>
          </div>
          
          {/* Proceso en pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Número de paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Gradiente sutil de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
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
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="relative flex items-center gap-3">
                <span>Iniciar Transformación</span>
                <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Elite Competitive Edge */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Fondo con efectos de neón */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/50 to-green-950/50"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Título impactante */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Ventaja Disruptiva</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Lo que nos hace</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Incomparables
                </span>
              </h2>
            </div>

            {/* Grid de ventajas premium */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Lado izquierdo - Texto principal */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">RevOps + IA de Vanguardia</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    No solo implementamos tecnología, creamos ecosistemas inteligentes que aprenden, 
                    se adaptan y evolucionan con tu negocio. Nuestra metodología combina Revenue Operations 
                    con inteligencia artificial de última generación.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
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
                    className="group flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-400/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">
                      {advantage}
                    </span>
                  </div>
                ))}
                
                {/* CTA especial */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">¿Listo para la transformación?</h4>
                      <p className="text-gray-300">Agenda una consultoría estratégica gratuita</p>
                    </div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all"
                    >
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
          <div className="absolute bottom-16 left-16 w-48 h-48 border border-purple-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '30s'}}></div>
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
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Extraordinarias
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Línea decorativa */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA final poderoso */}
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/30 to-green-950/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Sección principal del footer */}
          <div className="py-16 border-b border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Logo y descripción */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
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
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6">
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
