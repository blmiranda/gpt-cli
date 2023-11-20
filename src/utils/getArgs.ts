function getArgs(): string[] {
  const args: string[] = process.argv;

  if (args[1].endsWith('index.js')) {
    return args.slice(2);
  }

  return args.slice(1);
}

export default getArgs;
