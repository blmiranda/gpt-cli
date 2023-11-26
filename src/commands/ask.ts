import openai from '../clients/openaiClient.js';

import colors from '../utils/colors.js';
import conversation from '../utils/conversation.js';
import displayResponse from '../utils/displayResponse.js';

async function ask(question: string) {
  try {
    console.log(colors.yellow, 'Processing...', colors.reset, '\n');

    conversation.addToHistory({ role: 'user', content: question });

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: conversation.history,
      stream: false,
    });

    conversation.addToHistory({
      role: 'assistant',
      content: response.choices[0]?.message.content,
    });

    displayResponse(response.choices[0]?.message.content);
  } catch (error) {
    throw new Error(error);
  }
}

export default ask;
