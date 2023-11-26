import Message from '../types/Message.js';

interface Conversation {
  history: Array<Message>;
  addToHistory: (message: Message) => void;
}

export default Conversation;
