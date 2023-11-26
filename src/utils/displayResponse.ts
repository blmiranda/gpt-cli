import colors from './colors.js';

function displayResponse(message: string): void {
  console.log(colors.green, message, colors.reset, '\n');
}

export default displayResponse;
