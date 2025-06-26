# 🤖 Configuración del ChatBot con N8N

Este documento explica cómo configurar el chatbot para que funcione con N8N y un asistente de IA.

## 📋 Requisitos Previos

1. **N8N Instance** - Puedes usar n8n.cloud o self-hosted
2. **API de IA** - OpenAI, Claude, o cualquier API de IA que prefieras
3. **Webhook URL** - URL pública de tu instancia de N8N

## 🔧 Configuración del Webhook

### 1. Editar la configuración

Edita el archivo `src/config/chatbot.ts` y cambia la URL del webhook:

```typescript
export const CHATBOT_CONFIG = {
  // Cambia esta URL por tu webhook real de N8N
  webhookUrl: 'https://tu-instancia-n8n.com/webhook/chatbot',
  // ... resto de configuración
};
```

### 2. Estructura del Workflow en N8N

Crea un workflow en N8N con la siguiente estructura:

```
Webhook Trigger → Process Message → AI API Call → Format Response → Return Response
```

## 📡 Datos que Recibe el Webhook

El chatbot enviará un objeto JSON con esta estructura:

```json
{
  "message": "Texto del mensaje del usuario",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "userId": "web-user-1234567890",
  "sessionId": "session-1234567890",
  "userContext": {
    "page": "/",
    "userAgent": "Mozilla/5.0...",
    "referrer": "https://google.com"
  }
}
```

## 📤 Formato de Respuesta Esperado

N8N debe devolver una respuesta JSON con esta estructura:

```json
{
  "response": "Respuesta del asistente de IA",
  "suggestions": [
    "¿Cómo automatizar procesos?",
    "Implementar CRM",
    "Consultoría en IA"
  ],
  "actions": [
    {
      "type": "link",
      "label": "Agenda una consulta",
      "url": "https://wa.me/573002408743"
    }
  ],
  "metadata": {
    "confidence": 0.95,
    "intent": "consulta_servicios",
    "entities": ["CRM", "automatización"]
  }
}
```

## 🔧 Ejemplo de Workflow N8N

### 1. Webhook Node
- **Method**: POST
- **Path**: `/webhook/chatbot`
- **Response Mode**: Using 'Respond to Webhook' Node

### 2. Function Node - Process Message
```javascript
// Extraer datos del webhook
const userMessage = $json.message;
const userId = $json.userId;
const sessionId = $json.sessionId;
const userContext = $json.userContext;

// Preparar prompt para IA
const systemPrompt = `Eres un asistente especializado en Sixteam.pro, una agencia de automatización y RevOps con IA. 

Servicios que ofrecemos:
- Consultoría Estratégica en RevOps
- Implementación de CRM (HubSpot, Salesforce)
- Automatización con IA
- Integración de herramientas (Zapier, Make)
- Optimización de procesos comerciales

Responde de manera amigable y profesional. Si no estás seguro, sugiere agendar una consulta.`;

const userPrompt = `Usuario pregunta: ${userMessage}`;

return {
  systemPrompt,
  userPrompt,
  userId,
  sessionId
};
```

### 3. HTTP Request Node - OpenAI API
- **Method**: POST
- **URL**: `https://api.openai.com/v1/chat/completions`
- **Headers**: 
  - `Authorization: Bearer YOUR_OPENAI_API_KEY`
  - `Content-Type: application/json`
- **Body**:
```json
{
  "model": "gpt-4",
  "messages": [
    {"role": "system", "content": "={{ $json.systemPrompt }}"},
    {"role": "user", "content": "={{ $json.userPrompt }}"}
  ],
  "max_tokens": 500,
  "temperature": 0.7
}
```

### 4. Function Node - Format Response
```javascript
// Extraer respuesta de OpenAI
const aiResponse = $json.choices[0].message.content;

// Generar sugerencias basadas en el contexto
const suggestions = [];
if (aiResponse.toLowerCase().includes('crm')) {
  suggestions.push('¿Cómo implementar HubSpot?');
}
if (aiResponse.toLowerCase().includes('automatización')) {
  suggestions.push('¿Qué procesos puedo automatizar?');
}
if (suggestions.length === 0) {
  suggestions.push('¿Cómo pueden ayudarme?', 'Agenda una consulta', '¿Qué es RevOps?');
}

return {
  response: aiResponse,
  suggestions: suggestions.slice(0, 3),
  actions: [
    {
      type: "link",
      label: "Contactar por WhatsApp",
      url: "https://wa.me/573002408743?text=Hola, me interesa conocer más sobre los servicios"
    }
  ],
  metadata: {
    confidence: 0.95,
    intent: "consulta_general",
    timestamp: new Date().toISOString()
  }
};
```

### 5. Respond to Webhook Node
- **Response Data**: `$json`

## 🔄 Funcionalidades del ChatBot

### ✅ Lo que ya está implementado:
- 💬 Interfaz de chat moderna y responsive
- 🔄 Conexión automática con webhook N8N
- ⏱️ Indicadores de "escribiendo..."
- 📱 Botón flotante para abrir/cerrar
- 🔄 Minimizar/maximizar ventana de chat
- 📝 Historial de mensajes
- 🎯 Manejo de errores de conexión
- 🔧 Configuración centralizada
- 📊 Envío de contexto del usuario
- 💡 Soporte para sugerencias
- 🆔 Gestión de sesiones

### 🔮 Próximas mejoras sugeridas:
- 📎 Soporte para archivos adjuntos
- 🔊 Síntesis de voz
- 🌙 Modo oscuro
- 📊 Analytics de conversaciones
- 🔄 Integración con CRM
- 🎨 Temas personalizables

## 🧪 Testing

Para probar el chatbot sin N8N configurado:

1. El botón aparecerá en la esquina inferior izquierda
2. Al hacer clic se abrirá el chat
3. Escribe un mensaje - mostrará error de conexión (normal)
4. Configura tu webhook de N8N para que funcione completamente

## 🚀 Despliegue

1. Configura tu webhook en N8N
2. Actualiza la URL en `src/config/chatbot.ts`
3. Despliega tu aplicación
4. ¡El chatbot estará listo!

## 📞 Soporte

Si necesitas ayuda configurando el chatbot:
- WhatsApp: +573002408743
- Email: alpha@sixteam.pro

---

**¡Que disfrutes tu nuevo asistente de IA! 🎉** 