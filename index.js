require('dotenv').config();
const OpenAI = require ('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function consultaBasica() {
  try {
    console.log('🤖 Enviando consulta a OpenAI...\n');
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "user", 
          content: "Explica qué es Node.js en 3 líneas" 
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });
    
    const respuesta = response.choices[0].message.content;
    console.log('📝 Respuesta:', respuesta);
    console.log('\n💰 Tokens usados:', response.usage.total_tokens);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

consultaBasica();