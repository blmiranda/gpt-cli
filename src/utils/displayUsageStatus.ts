import UsageData from '../types/UsageData.js';

import colors from './colors.js';
import alignTextRight from './alignTextRight.js';

function displayUsageStatus(usageData: UsageData): void {
  const promptTokens = usageData.prompt_tokens;
  const completionTokens = usageData.completion_tokens;
  const totalTokens = usageData.total_tokens;

  const price: number = promptTokens * 0.00003 + completionTokens * 0.00006;

  const priceText: string = `$${price.toFixed(5)}`;

  const usageStatusText: string =
    'Tokens: ' +
    colors.cyan +
    totalTokens +
    colors.reset +
    ' | ' +
    'Total: ' +
    colors.cyan +
    priceText +
    colors.reset;

  const alignedUsageStatusText = alignTextRight(usageStatusText);

  console.log(alignedUsageStatusText);
}

export default displayUsageStatus;
