# ConstructTech Careers

A modern platform for construction trades education and career development.

## Features

- **Trade Programs**: Comprehensive information about various construction trade programs
- **AI Career Assistant**: Interactive chat to help students explore and choose trade programs
- **Program Details**: Duration, prerequisites, and certification information
- **Responsive Design**: Mobile-friendly interface for easy access

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API access (for AI chat feature)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/constructtech-careers.git
cd constructtech-careers
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env.local`
- Add your OpenAI Project API key and Project ID
```env
OPENAI_API_KEY=your-project-api-key-here
OPENAI_PROJECT_ID=your-project-id-here
```

4. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## AI Chat Feature

The platform includes an AI-powered chat assistant that helps students:
- Explore different trade programs
- Understand prerequisites and requirements
- Get personalized program recommendations
- Learn about career paths and opportunities

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- Radix UI Components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
