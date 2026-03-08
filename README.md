# Code-Mentor: AI-Powered Code Reviewer 🤖

[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org/)
[![AI](https://img.shields.io/badge/AI-Gemini-orange)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A full-stack application that provides automated, AI-driven code reviews using Google's Gemini AI. Submit your code and receive professional, detailed feedback in seconds!

Live website link: [AI-Powered Code Reviewer](https://ai-code-reviewer-villwin007.netlify.app/)

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/44b0b235-d23a-4612-ac13-1a822ca3349b" />


## ✨ Features

- **🖥️ Modern Code Editor**: Syntax-highlighted code editor powered by CodeMirror
- **🤖 AI-Powered Analysis**: Professional code reviews using Google's Gemini AI
- **📊 Comprehensive Feedback**: 
  - Code quality and best practices assessment
  - Potential bugs and security issues
  - Performance optimization suggestions
  - Alternative approaches and improvements
  - Positive reinforcement for well-written code
- **⚡ Real-time Results**: Fast, markdown-formatted reviews
- **🎯 Multi-language Support**: Adaptable for various programming languages
- **🚀 Modern Stack**: Built with React + Vite frontend and Node.js + Express backend

## 🏗️ Project Structure

```
AI-Powered-Code-Reviewer/
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main application component
│   │   ├── main.jsx            # Entry point for React app
│   │   ├── App.css             # Main CSS styles
│   │   └── components/         # Reusable React components
│   ├── index.html              # HTML template for the app
│   ├── package.json            # Frontend dependencies and scripts
│   ├── vite.config.js          # Vite build configuration
│   └── README.md               # Frontend-specific documentation
├── Backend/
│   ├── src/
│   │   ├── app.js              # Express application setup
│   │   ├── routes/
│   │   │   └── ai.routes.js    # API route definitions
│   │   ├── controllers/
│   │   │   └── ai.controller.js# Request handlers
│   │   └── services/
│   │       └── ai.service.js   # AI integration logic
│   ├── server.js               # Server entry point
│   ├── package.json            # Backend dependencies and scripts
│   ├── INSTRUCTIONS.md         # Backend setup instructions
│   └── .env.example            # Environment variables template
└── README.md                   # Project overview (this file)
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Gemini API key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/arunkumarsingh-20/Code-Mentor.git
   cd Code-Mentor
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```
   
   **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file:
   ```env
   GOOGLE_GEMINI_KEY=your_actual_gemini_api_key_here
   PORT=3000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server** (Terminal 1)
   ```bash
   cd Backend
   npx nodemon server.js
   ```
   ✅ Backend running on: `http://localhost:3000`

2. **Start the Frontend Development Server** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   ✅ Frontend running on: `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 How It Works

### User Workflow
1. **Write Code**: Use the built-in code editor to write or paste your code
2. **Submit for Review**: Click the "Review Code" button
3. **AI Analysis**: Your code is sent to the Gemini AI for comprehensive analysis
4. **Get Feedback**: Receive detailed, markdown-formatted review with suggestions

### Technical Flow
```
Frontend (React) → HTTP POST → Backend (Express) → Gemini AI → Review → Frontend
```

### API Endpoints

#### POST `/ai/get-review`
Submit code for AI-powered review

**Request:**
```json
{
  "code": "function example() {\n  console.log('Hello World');\n}"
}
```

**Response:**
```json
{
  "review": "## Code Review\\n\\n### ✅ Strengths\\n- Clean function structure...\\n\\n### 🐛 Issues\\n- Missing error handling...\\n\\n### 💡 Suggestions\\n- Consider using const instead of function...\\n\\n### 🔒 Security\\n- No security vulnerabilities detected"
}
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CodeMirror** - Code editor with syntax highlighting
- **Axios** - HTTP client for API calls
- **ReactMarkdown** - Markdown rendering for reviews

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Generative AI SDK** - Gemini AI integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### AI & APIs
- **Google Gemini AI** (`gemini-2.5-flash-lite`) - Code analysis and review generation
- **RESTful API** - Communication between frontend and backend

## 🔧 Configuration

### Customizing Review Guidelines
Modify the AI review behavior by editing `Backend/src/services/ai.service.js`:

```javascript
const systemInstruction = `
You are an expert senior software engineer conducting code reviews. 
Provide comprehensive feedback covering:

🔍 CODE QUALITY
- Readability and maintainability
- Code organization and structure
- Naming conventions
- Code smells and anti-patterns

🐛 BUGS & ISSUES  
- Logical errors
- Edge cases
- Potential runtime issues
- Type safety concerns

⚡ PERFORMANCE
- Optimization opportunities
- Memory usage
- Algorithm efficiency

🔒 SECURITY
- Vulnerability assessment
- Input validation
- Data protection

💡 BEST PRACTICES
- Language-specific conventions
- Modern development practices
- Scalability considerations

Format your response in clear markdown with emojis for better readability.
Be constructive but honest in your feedback.
`;
```

### Adding Language Support
The AI model supports multiple programming languages. To enhance frontend support:

```javascript
// In frontend components, add language extensions:
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
// Add more as needed
```

## 📚 API Documentation

### Code Review Endpoint

**URL:** `POST http://localhost:3000/ai/get-review`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```typescript
{
  code: string;  // The source code to review
}
```

**Response:**
```typescript
{
  review: string;  // Markdown-formatted review
  success: boolean;
}
```

**Error Responses:**
```typescript
{
  error: string;
  success: false;
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend connection refused**
   - Ensure backend is running on port 3000
   - Check if `GOOGLE_GEMINI_KEY` is set in `.env`

2. **AI review fails**
   - Verify your Gemini API key is valid and has sufficient quota
   - Check network connectivity to Google AI services

3. **CORS errors**
   - Backend CORS is configured for `http://localhost:5173`
   - Ensure frontend is running on the correct port

4. **Module not found errors**
   - Run `npm install` in both frontend and backend directories
   - Delete `node_modules` and `package-lock.json`, then reinstall

### Debug Mode
Enable detailed logging by setting environment variable:
```bash
DEBUG=true
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Add comments for complex logic
- Update documentation for new features
- Test both frontend and backend changes

### Planned Features
- [ ] Review history and favorites
- [ ] GitHub integration
- [ ] Custom review templates
- [ ] Batch file analysis
- [ ] CI/CD pipeline integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arun Kumar Singh**

- GitHub: [@arunkumarsingh-20](https://github.com/arunkumarsingh-20)
- Email: [arunnsingh7609@gmail.com](mailto:arunnsingh7609@gmail.com)
- Portfolio: [portfolio](https://portfolio-arunkumarsingh.vercel.app/)

## 🙏 Acknowledgments

- **Google Gemini AI** for providing powerful code analysis capabilities
- **CodeMirror** team for the excellent code editor component
- **React** and **Node.js** communities for amazing tools and libraries
- **Vite** team for the fast build tool and dev experience

## 🔗 Useful Links

- [Google AI Studio](https://aistudio.google.com/) - Get Gemini API key
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Gemini API Documentation](https://ai.google.dev/docs)

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

For questions, support, or contributions, please open an issue or contact [arunnsingh7609@gmail.com](mailto:arunnsingh7609@gmail.com).

---

<div align="center">

**Happy Coding! 🚀**

*"Better code through AI-powered insights"*

</div>
