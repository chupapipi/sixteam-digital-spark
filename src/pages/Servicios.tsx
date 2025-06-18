
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Search, Settings, Wrench, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Servicios = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004567890?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  const phases = [
    {
      phase: 'Fase 1',
      title: 'Análisis y Diagnóstico',
      icon: Search,
      description: 'Iniciamos con una consultoría profunda para entender las necesidades específicas y "dolores" de tu negocio.',
      details: [
        'Análisis completo de procesos actuales',
        'Identificación de oportunidades de mejora',
        'Evaluación de herramientas existentes',
        'Propuesta de estrategias personalizadas',
        'Plan de implementación detallado'
      ],
      color: 'from-sixteam-blue to-sixteam-blue/80'
    },
    {
      phase: 'Fase 2',
      title: 'Implementación',
      icon: Settings,
      description: 'Configuramos y desarrollamos las soluciones tecnológicas que tu empresa necesita para crecer.',
      details: [
        'Implementación de software CRM personalizado',
        'Desarrollo de herramientas a medida',
        'Configuración de automatizaciones',
        'Integración con sistemas existentes',
        'Migración de datos y procesos'
      ],
      color: 'from-sixteam-teal to-sixteam-teal/80'
    },
    {
      phase: 'Fase 3',
      title: 'Soporte Continuo',
      icon: Wrench,
      description: 'Garantizamos el éxito a largo plazo con soporte técnico, actualizaciones y capacitación constante.',
      details: [
        'Soporte técnico especializado',
        'Actualizaciones y mejoras continuas',
        'Capacitación del equipo',
        'Monitoreo de performance',
        'Optimizaciones basadas en resultados'
      ],
      color: 'from-sixteam-navy to-sixteam-navy/80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones Integrales para tu Transformación Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Acompañamos tu empresa en cada etapa del proceso de optimización y crecimiento digital
            </p>
          </div>
        </div>
      </section>

      {/* Fases del Servicio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Nuestro Proceso de Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado y probado que garantiza resultados tangibles en cada etapa
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden shadow-xl">
                  <div className={`bg-gradient-to-r ${phase.color} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium opacity-90">{phase.phase}</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg opacity-90">{phase.description}</p>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-sixteam-navy mb-4">
                          Qué incluye esta fase:
                        </h4>
                        <ul className="space-y-3">
                          {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <ArrowRight className="w-5 h-5 text-sixteam-teal mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-sixteam-navy mb-4">
                          Resultados esperados:
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          {index === 0 && (
                            <>
                              <p>• Diagnóstico completo y estrategia clara</p>
                              <p>• Roadmap detallado de implementación</p>
                              <p>• Identificación de quick wins</p>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <p>• Sistemas funcionando optimizadamente</p>
                              <p>• Procesos automatizados y eficientes</p>
                              <p>• Equipo capacitado en nuevas herramientas</p>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <p>• Operación estable y confiable</p>
                              <p>• Mejora continua de procesos</p>
                              <p>• Crecimiento sostenible a largo plazo</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías y Herramientas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Tecnologías que Dominamos
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con las mejores herramientas del mercado
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['HubSpot', 'Salesforce', 'ManyChat', 'Zapier', 'WordPress', 'React', 'Python', 'Google Analytics'].map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">{tech.slice(0, 2)}</span>
                  </div>
                  <h3 className="font-semibold text-sixteam-navy">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Hablemos de tu proyecto y diseñemos juntos la estrategia perfecta para tu empresa
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hablemos de tu Proyecto en WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
