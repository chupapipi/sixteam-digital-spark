import React, { useState } from 'react';

const SolutionsInteractiveGrid = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 1,
      title: "Chatbots Potenciados con IA",
      description: "Desarrollamos asistentes virtuales inteligentes que automatizan conversaciones, brindan soporte 24/7 y califican leads de manera automatizada. Nuestros chatbots aprenden de cada interacción para mejorar continuamente la experiencia del usuario.",
      icon: "🤖"
    },
    {
      id: 2,
      title: "CRM Implementado y Configurado",
      description: "Implementamos y configuramos sistemas CRM personalizados que centralizan toda la información de tus clientes. Desde la captura de leads hasta el seguimiento post-venta, creamos un hub inteligente que potencia tus relaciones comerciales.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Automatizaciones de Flujo de Trabajo",
      description: "Diseñamos flujos automatizados que eliminan tareas repetitivas y reducen errores humanos. Desde el seguimiento de leads hasta la gestión de proyectos, automatizamos procesos para que tu equipo se enfoque en actividades de alto valor.",
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Integraciones entre Herramientas",
      description: "Conectamos todas tus herramientas tecnológicas en un ecosistema unificado. Eliminamos silos de información y creamos flujos de datos sincronizados entre plataformas para una operación más eficiente.",
      icon: "🔗"
    },
    {
      id: 5,
      title: "Mapeo de Procesos",
      description: "Analizamos y documentamos tus procesos actuales para identificar oportunidades de mejora. Creamos mapas visuales que revelan cuellos de botella y oportunidades de automatización, optimizando cada etapa de tu operación.",
      icon: "🗺️"
    },
    {
      id: 6,
      title: "Estrategias de Marketing Digital",
      description: "Desarrollamos estrategias de marketing digital basadas en datos que maximizan tu ROI. Desde campañas automatizadas hasta nurturing personalizado, creamos sistemas que atraen, convierten y fidelizan clientes de manera escalable.",
      icon: "📈"
    },
    {
      id: 7,
      title: "Estrategias de Ventas",
      description: "Implementamos metodologías de ventas estructuradas con automatizaciones inteligentes. Creamos pipelines optimizados, sistemas de scoring de leads y procesos de seguimiento que incrementan significativamente tus tasas de conversión.",
      icon: "💼"
    },
    {
      id: 8,
      title: "Estrategias de Servicio al Cliente",
      description: "Diseñamos experiencias de servicio excepcionales que fidelizan clientes y generan referidos. Implementamos sistemas de soporte omnicanal, automatizaciones de seguimiento y métricas de satisfacción que elevan tu servicio al siguiente nivel.",
      icon: "🎯"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-7xl mx-auto">
      {/* Lista de soluciones (izquierda) */}
      <div className="space-y-3 px-4 sm:px-0">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
              activeSolution === index
                ? 'bg-blue-600/20 border-blue-400/60 shadow-lg'
                : 'bg-gray-800/40 border-gray-600/40 hover:border-blue-400/30 hover:bg-gray-800/60'
            }`}
            onClick={() => setActiveSolution(index)}
            onMouseEnter={() => setActiveSolution(index)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{solution.icon}</span>
              <span className={`font-semibold transition-colors ${
                activeSolution === index ? 'text-white' : 'text-gray-200'
              }`}>
                {solution.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Contenido interactivo (derecha) */}
      <div className="px-4 sm:px-0">
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 sm:p-8 min-h-[400px] flex flex-col justify-center">
          <div className="text-center mb-6">
            <span className="text-4xl sm:text-5xl mb-4 block">
              {solutions[activeSolution].icon}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {solutions[activeSolution].title}
            </h3>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
            {solutions[activeSolution].description}
          </p>
          
          {/* Indicador de progreso */}
          <div className="flex justify-center mt-6 gap-2">
            {solutions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSolution === index ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsInteractiveGrid; 