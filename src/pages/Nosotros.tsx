
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Eye, Award, Users, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Nosotros = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004567890?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20el%20equipo%20de%20Sixteam.pro', '_blank');
  };

  const teamMembers = [
    {
      name: 'Samuel Burgos',
      role: 'Director General',
      expertise: 'Administrador de Empresas y Experto en RevOps',
      description: 'Con más de 8 años de experiencia en transformación digital y optimización de procesos de revenue operations, Samuel lidera la estrategia general de Sixteam.pro. Su enfoque consultivo y visión estratégica han ayudado a decenas de empresas a alcanzar sus objetivos de crecimiento.',
      specialties: ['Revenue Operations', 'Estrategia Digital', 'CRM Implementation', 'Business Intelligence'],
      image: 'samuel'
    },
    {
      name: 'Ernesto Hernández',
      role: 'Director de Procesos',
      expertise: 'Ingeniero Industrial y Experto en Diseño de Procesos',
      description: 'Ernesto aporta una sólida formación en ingeniería industrial y más de 6 años especializándose en optimización de procesos y gestión de proyectos. Su metodología estructurada garantiza implementaciones exitosas y resultados medibles en cada proyecto.',
      specialties: ['Diseño de Procesos', 'Gestión de Proyectos', 'Automatización', 'Optimización Operacional'],
      image: 'ernesto'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Orientación a Resultados',
      description: 'Cada proyecto debe generar valor medible y tangible para nuestros clientes.'
    },
    {
      icon: Users,
      title: 'Enfoque Consultivo',
      description: 'Escuchamos, entendemos y adaptamos nuestras soluciones a cada realidad empresarial.'
    },
    {
      icon: Award,
      title: 'Excelencia Técnica',
      description: 'Utilizamos las mejores prácticas y tecnologías más avanzadas del mercado.'
    },
    {
      icon: Briefcase,
      title: 'Compromiso a Largo Plazo',
      description: 'Construimos relaciones duraderas y acompañamos el crecimiento de nuestros clientes.'
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
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Conoce al equipo que impulsa la transformación digital de empresas en toda Colombia
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Filosofía */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-8">
                Nuestra Filosofía
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Misión */}
              <Card className="bg-gradient-to-br from-sixteam-blue to-sixteam-blue/90 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 mr-4" />
                    <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Proporcionar servicios de alto valor en la creación, operación y mantenimiento de sistemas 
                    relacionados con las áreas de marketing y ventas, facilitando la transformación digital de 
                    las empresas y contribuyendo a su crecimiento en el mundo digital.
                  </p>
                </CardContent>
              </Card>

              {/* Visión */}
              <Card className="bg-gradient-to-br from-sixteam-teal to-sixteam-teal/90 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 mr-4" />
                    <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Para 2026, ser referentes en el mercado como socios estratégicos en transformación digital 
                    para empresas que buscan innovar y optimizar sus procesos de marketing y ventas mediante 
                    soluciones tecnológicas avanzadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión y proyecto que emprendemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-sixteam-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* El Equipo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales especializados con experiencia comprobada en transformación digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-r from-sixteam-navy to-sixteam-blue p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-sixteam-teal font-medium">{member.role}</p>
                      <p className="text-sm opacity-90">{member.expertise}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sixteam-navy mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-3 py-1 bg-sixteam-gray text-sixteam-navy text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sixteam-navy mb-8">
              ¿Por qué elegir Sixteam.pro?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-sixteam-blue mb-2">50+</div>
                <p className="text-gray-600">Proyectos completados exitosamente</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sixteam-teal mb-2">15+</div>
                <p className="text-gray-600">Sectores industriales atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sixteam-navy mb-2">98%</div>
                <p className="text-gray-600">Índice de satisfacción de clientes</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                En Sixteam.pro combinamos experiencia técnica sólida con un enfoque profundamente humano y consultivo. 
                No somos solo proveedores de tecnología; somos socios estratégicos comprometidos con el crecimiento 
                sostenible de tu empresa. Nuestra diversidad de experiencias en múltiples sectores nos permite adaptarnos 
                rápidamente a cualquier desafío y ofrecer soluciones realmente efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a las empresas que confían en nosotros
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos de crecimiento digital
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Contáctanos
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
