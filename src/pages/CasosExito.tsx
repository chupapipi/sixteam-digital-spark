
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const CasosExito = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004567890?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20casos%20de%20éxito%20de%20Sixteam.pro', '_blank');
  };

  const casosExito = [
    {
      cliente: 'Student Travel Center',
      sector: 'Agencia Líder en Viajes y Turismo Académico en Colombia',
      challenge: 'Proceso de ventas desorganizado y falta de seguimiento efectivo a clientes potenciales, lo que resultaba en pérdida de oportunidades de negocio y bajo retorno de inversión en marketing.',
      solution: 'Realizamos un diagnóstico completo de sus procesos de ventas, implementamos HubSpot CRM personalizado para el sector de viajes académicos, y automatizamos el seguimiento por WhatsApp mediante herramientas como ManyChat. Incluimos las tres fases: Análisis detallado, Implementación de CRM y automatizaciones, y Soporte continuo con capacitación.',
      results: [
        'Aumento del 35% en ventas en 6 meses',
        'Reducción del 60% del tiempo en tareas manuales',
        'Mejora del 85% en la tasa de respuesta a clientes',
        'Incremento del 40% en conversión de leads'
      ],
      image: 'travel',
      metrics: {
        sales: '+35%',
        time: '-60%',
        response: '+85%'
      }
    },
    {
      cliente: 'TechInnovate Solutions',
      sector: 'Empresa de Desarrollo de Software B2B',
      challenge: 'Dificultades para gestionar múltiples proyectos simultáneamente y comunicación ineficiente con clientes, generando retrasos en entregas y insatisfacción del cliente.',
      solution: 'Implementamos un sistema integral de gestión de proyectos con Salesforce, desarrollamos un portal personalizado para clientes, y automatizamos reportes de progreso. El proceso incluyó análisis de workflows existentes, configuración de CRM especializado para desarrollo de software, y establecimiento de procesos de soporte y mejora continua.',
      results: [
        'Reducción del 45% en tiempo de gestión de proyectos',
        'Aumento del 50% en satisfacción del cliente',
        'Mejora del 30% en cumplimiento de tiempos de entrega',
        'Incremento del 25% en proyectos gestionados simultáneamente'
      ],
      image: 'tech',
      metrics: {
        efficiency: '+45%',
        satisfaction: '+50%',
        delivery: '+30%'
      }
    },
    {
      cliente: 'RetailMax Colombia',
      sector: 'Cadena de Retail con 15 Tiendas Físicas',
      challenge: 'Falta de integración entre ventas online y offline, inventario desactualizado en tiempo real, y dificultades para medir el ROI de campañas de marketing digital.',
      solution: 'Desarrollamos una solución integral que conecta todas las tiendas con una plataforma centralizada, implementamos un sistema de inventario en tiempo real, y configuramos dashboards analíticos personalizados. El proyecto incluyó consultoría estratégica omnicanal, implementación de sistema unificado, y soporte continuo con optimizaciones mensuales.',
      results: [
        'Unificación del 100% de inventario en tiempo real',
        'Aumento del 28% en ventas cruzadas online-offline',
        'Reducción del 70% en errores de inventario',
        'Mejora del 90% en visibilidad de métricas de negocio'
      ],
      image: 'retail',
      metrics: {
        integration: '100%',
        sales: '+28%',
        errors: '-70%'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Historias reales de transformación digital que generaron resultados medibles y crecimiento sostenible
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas Generales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-sixteam-teal mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-sixteam-navy mb-2">+35%</h3>
                <p className="text-gray-600">Promedio de aumento en ventas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-sixteam-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-sixteam-navy mb-2">-55%</h3>
                <p className="text-gray-600">Reducción en tiempo de procesos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-sixteam-navy mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-sixteam-navy mb-2">100%</h3>
                <p className="text-gray-600">Clientes satisfechos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Detallados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {casosExito.map((caso, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Contenido Principal */}
                    <div className="lg:col-span-3 p-8">
                      {/* Header del caso */}
                      <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-sixteam-navy mb-2">
                          {caso.cliente}
                        </h2>
                        <p className="text-lg text-sixteam-blue font-medium">
                          {caso.sector}
                        </p>
                      </div>

                      {/* El Desafío */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-sixteam-navy mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          El Desafío
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {caso.challenge}
                        </p>
                      </div>

                      {/* La Solución */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-sixteam-navy mb-3 flex items-center">
                          <span className="w-2 h-2 bg-sixteam-blue rounded-full mr-3"></span>
                          La Solución Sixteam.pro
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {caso.solution}
                        </p>
                      </div>

                      {/* Los Resultados */}
                      <div>
                        <h3 className="text-xl font-semibold text-sixteam-navy mb-3 flex items-center">
                          <span className="w-2 h-2 bg-sixteam-teal rounded-full mr-3"></span>
                          Los Resultados
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {caso.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <ArrowRight className="w-5 h-5 text-sixteam-teal mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Métricas Destacadas */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-sixteam-blue to-sixteam-teal p-8 text-white">
                      <h3 className="text-xl font-semibold mb-6">Métricas Clave</h3>
                      <div className="space-y-6">
                        {Object.entries(caso.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center bg-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold mb-2">{value}</div>
                            <div className="text-sm opacity-90 capitalize">
                              {key === 'sales' && 'Aumento en Ventas'}
                              {key === 'time' && 'Reducción de Tiempo'}
                              {key === 'response' && 'Mejora en Respuesta'}
                              {key === 'efficiency' && 'Mejora en Eficiencia'}
                              {key === 'satisfaction' && 'Satisfacción Cliente'}
                              {key === 'delivery' && 'Cumplimiento Entregas'}
                              {key === 'integration' && 'Integración Lograda'}
                              {key === 'errors' && 'Reducción Errores'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonio Destacado */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="text-6xl text-sixteam-teal mb-6">"</div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                Sixteam.pro no solo implementó tecnología, transformó completamente nuestra forma de hacer negocio. Su enfoque integral y soporte continuo han sido clave para nuestro crecimiento sostenido.
              </p>
              <div>
                <p className="font-semibold text-sixteam-navy text-lg">María Elena Rodríguez</p>
                <p className="text-gray-500">Directora Comercial, Student Travel Center</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu empresa puede ser el próximo caso de éxito
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Cada proyecto es único, pero los resultados siempre son tangibles. Conversemos sobre cómo podemos transformar tu negocio.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Conversemos sobre tu Proyecto
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosExito;
