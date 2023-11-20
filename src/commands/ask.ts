import openai from '../clients/openaiClient.js';

async function ask(question: string) {
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: question }],
      stream: true,
    });

    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default ask;
