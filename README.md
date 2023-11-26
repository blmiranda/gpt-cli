# gpt-cli-tool

Command-line interface for ChatGPT.

<img width="1663" alt="Screenshot 2023-11-21 at 11 18 35 AM" src="https://github.com/blmiranda/gpt-cli-tool/assets/94651050/add34a9b-89fa-4852-9762-bcb848651c76">

## Features

### Coming soon

- [x] **Model customization**: Create an accessible config file to give you fine grain control over the model you want to use
- [ ] **Continuous conversation**: Make the model keep conversations just like in the ChatGPT website
- [ ] **Usage tracking**: Track your usage with token count and price information.

## Getting Started

These instructions will walk you through the process of installing the software

### Prerequisites

What things you need to install the software

- NodeJS & npm

### Installing

A step by step series of examples that tell you how to get the software running

#### Get an OpenAI api key

1. Go to the [OpenAI website](https://www.openai.com/)
2. Create an account
3. Navigate to the main screen. It should be something like this when you log in...
   <img width="610" alt="Screenshot" src="https://github.com/blmiranda/gpt-cli-tool/assets/94651050/14d5dfaa-749e-4e94-946f-fac0ebb54022">

4. Click on "API" and navigate to the "API keys" tab
   <img width="610" alt="Screenshot" src="https://github.com/blmiranda/gpt-cli-tool/assets/94651050/bde32821-7fbe-49ac-8b6f-8e42196f4a6c">

5. Generate an api key and save it somewhere, you are going to need it in the next step.

#### Add the OpenAI api key to your system's env variables

You can use whatever shell and editor you like.

This install assumes a Linux/OSX machine.

bash

```bash
vim ~/.bashrc
export OPENAI_API_KEY=<your_key_here>
```

fish

```fish
set -Ux OPEN_AI_KEY <your_key_here>
```

#### Install gpt-cli-tool with npm

```
npm install -g gpt-cli-tool
```

## Built With

- [NodeJS](https://nodejs.org/en) - The runtime
- [NPM](https://www.npmjs.com/) - Dependency Management
- [OpenAI API](https://openai.com/blog/openai-api) - The API

## Authors

- **Brian Miranda** - _Developed the whole project_ - [blmiranda](https://github.com/blmiranda)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
