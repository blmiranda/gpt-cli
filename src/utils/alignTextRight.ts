function alignTextRight(text: string): string {
  const terminalWidth: number = process.stdout.columns;

  const ansiEscapeCodeRegex = /\x1b\[[0-9;]*m/g;
  const textLengthWithoutAnsi = text.replace(ansiEscapeCodeRegex, '').length;

  const paddingRight: number = terminalWidth - textLengthWithoutAnsi;

  return ' '.repeat(Math.max(paddingRight, 0)) + text;
}

export default alignTextRight;
