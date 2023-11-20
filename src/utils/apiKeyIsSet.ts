function apiKeyIsSet() {
  if (!process.env.OPENAI_API_KEY) {
    process.stdout.write(
      'You must set the environment variable OPENAI_API_KEY with your OpenAI api key',
    );
    return false;
  }

  return true;
}

export default apiKeyIsSet;
