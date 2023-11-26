import Conversation from '../types/Conversation.js';

const conversation: Conversation = {
  history: [],
  addToHistory(message) {
    this.history.push(message);
  },
};

export default conversation;
