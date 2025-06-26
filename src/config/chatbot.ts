// Configuración del ChatBot y webhook de N8N
export const CHATBOT_CONFIG = {
  // URL del webhook N8N configurada
  // El webhook recibe GET con parámetros: message, timestamp, userId, sessionId, thread, page, userAgent, referrer
  // Y responde con: { output: string, thread: string }
  webhookUrl: 'https://n8n-n8n.5raxun.easypanel.host/webhook/950b15bb-c425-4a6e-b97f-235ef623a853',
  
  // Configuración del asistente
  botName: 'Asistente IA Sixteam',
  
  // Mensaje inicial del bot
  initialMessage: '¡Hola! 👋 Dime tus problemas y te diré cómo te podríamos ayudar. Soy especialista en automatización, IA, CRM y procesos comerciales.',
  
  // Configuración de timeouts y reintentos
  requestTimeout: 30000, // 30 segundos
  maxRetries: 3,
  
  // Mensajes de error
  errorMessages: {
    connection: 'Parece que tengo problemas de conexión 😅. Mientras tanto, puedes contactarnos directamente por WhatsApp para obtener ayuda inmediata.',
    timeout: 'La respuesta está tardando más de lo esperado. ¿Podrías intentar reformular tu pregunta?',
    generic: 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?'
  },
  
  // Ejemplos de preguntas frecuentes que el bot puede manejar
  exampleQuestions: [
    '¿Cómo puedo automatizar mi proceso de ventas?',
    'Necesito ayuda con mi CRM',
    'Quiero implementar IA en mi negocio',
    '¿Qué es Revenue Operations?',
    'Tengo problemas con mis leads',
    'Necesito integrar mis herramientas de marketing'
  ]
};

// Función para validar la configuración del webhook
export const validateWebhookConfig = () => {
  if (CHATBOT_CONFIG.webhookUrl.includes('tu-webhook-url.com')) {
    console.warn('⚠️ CHATBOT: Recuerda cambiar la URL del webhook en src/config/chatbot.ts');
    return false;
  }
  console.log('✅ CHATBOT: Webhook configurado correctamente');
  return true;
};

// Tipos para las peticiones y respuestas del webhook personalizado
export interface WebhookRequest {
  message: string;
  timestamp: string;
  userId: string;
  sessionId?: string;
  thread?: string;
  userContext?: {
    page?: string;
    userAgent?: string;
    referrer?: string;
  };
}

export interface WebhookResponse {
  output: string;
  thread: string;
} 