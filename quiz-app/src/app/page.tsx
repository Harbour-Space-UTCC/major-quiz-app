'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles, TrendingUp, Users, Code, BarChart3, Shield } from 'lucide-react';

const MajorQuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const majors = {
    ux: {
      name: 'Interaction Design (UX/UI)',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Create beautiful, user-friendly digital experiences that people love to use.',
      skills: ['Visual Design', 'User Research', 'Prototyping', 'Psychology'],
      careers: ['UX Designer', 'UI Designer', 'Product Designer', 'Design Lead'],
      salary: '$65k - $120k',
      growth: '+8% (Fast Growth)'
    },
    marketing: {
      name: 'Digital Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Build brands and connect with audiences through data-driven digital strategies.',
      skills: ['Analytics', 'Content Strategy', 'SEO/SEM', 'Social Media'],
      careers: ['Digital Marketer', 'Brand Manager', 'Growth Hacker', 'Marketing Director'],
      salary: '$50k - $95k',
      growth: '+10% (Much Faster)'
    },
    entrepreneur: {
      name: 'High-tech Entrepreneurship',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Launch innovative tech startups and lead teams to change the world.',
      skills: ['Leadership', 'Business Strategy', 'Innovation', 'Networking'],
      careers: ['Startup Founder', 'Product Manager', 'Business Developer', 'Venture Capitalist'],
      salary: '$70k - $200k+',
      growth: '+15% (Much Faster)'
    },
    cs: {
      name: 'Computer Science',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Build software, apps, and systems that power our digital world.',
      skills: ['Programming', 'Problem Solving', 'System Design', 'Mathematics'],
      careers: ['Software Engineer', 'Full-stack Developer', 'Tech Lead', 'Architect'],
      salary: '$75k - $140k',
      growth: '+22% (Much Faster)'
    },
    data: {
      name: 'Data Science',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Turn data into insights that drive smart business decisions and discoveries.',
      skills: ['Statistics', 'Machine Learning', 'Data Analysis', 'Research'],
      careers: ['Data Scientist', 'ML Engineer', 'Research Scientist', 'Analytics Manager'],
      salary: '$80k - $150k',
      growth: '+35% (Much Faster)'
    },
    cyber: {
      name: 'Cyber Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-rose-500',
      description: 'Protect digital systems and data from cyber threats and attacks.',
      skills: ['Security Protocols', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
      careers: ['Security Engineer', 'Ethical Hacker', 'Security Consultant', 'CISO'],
      salary: '$70k - $130k',
      growth: '+33% (Much Faster)'
    }
  };

  const questions = [
    {
      question: "What type of activities do you enjoy most in your free time?",
      answers: [
        { text: "Creating art, designing, or making things look beautiful", scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 0, data: 0, cyber: 0 } },
        { text: "Analyzing trends, following social media, or creating content", scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 } },
        { text: "Leading group projects or starting new initiatives", scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "Coding, building apps, or solving logic puzzles", scores: { ux: 1, marketing: 0, entrepreneur: 1, cs: 3, data: 2, cyber: 2 } }
      ]
    },
    {
      question: "Which school subject is most interesting to you?",
      answers: [
        { text: "Art, Psychology, or English", scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 0, data: 0, cyber: 0 } },
        { text: "Business, Communications, or History", scores: { ux: 1, marketing: 3, entrepreneur: 3, cs: 0, data: 1, cyber: 1 } },
        { text: "Math, Physics, or Computer Science", scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 3, cyber: 2 } },
        { text: "Statistics, Research Methods, or Science", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 } }
      ]
    },
    {
      question: "How do you prefer to work on projects?",
      answers: [
        { text: "Alone, focusing on creative details", scores: { ux: 2, marketing: 1, entrepreneur: 0, cs: 2, data: 2, cyber: 2 } },
        { text: "In small teams, collaborating closely", scores: { ux: 3, marketing: 2, entrepreneur: 2, cs: 2, data: 1, cyber: 1 } },
        { text: "Leading a team and delegating tasks", scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "With data and research, working systematically", scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 3 } }
      ]
    },
    {
      question: "What motivates you most about technology?",
      answers: [
        { text: "Making technology easier and more beautiful to use", scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 1, data: 0, cyber: 0 } },
        { text: "Connecting people and building communities", scores: { ux: 2, marketing: 3, entrepreneur: 2, cs: 1, data: 0, cyber: 0 } },
        { text: "Creating innovative solutions to big problems", scores: { ux: 1, marketing: 1, entrepreneur: 3, cs: 2, data: 2, cyber: 1 } },
        { text: "Protecting people and keeping systems secure", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 1, cyber: 3 } }
      ]
    },
    {
      question: "Which work environment appeals to you most?",
      answers: [
        { text: "Creative studio with design tools and inspiration boards", scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 0, data: 0, cyber: 0 } },
        { text: "Dynamic office with lots of collaboration and meetings", scores: { ux: 2, marketing: 3, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "Tech hub with cutting-edge equipment and innovation", scores: { ux: 1, marketing: 1, entrepreneur: 2, cs: 3, data: 2, cyber: 2 } },
        { text: "Secure facility focused on research and analysis", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 3 } }
      ]
    },
    {
      question: "How do you learn new things best?",
      answers: [
        { text: "Visual examples, tutorials, and hands-on practice", scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 2, data: 1, cyber: 1 } },
        { text: "Reading case studies and real-world examples", scores: { ux: 1, marketing: 3, entrepreneur: 3, cs: 1, data: 2, cyber: 2 } },
        { text: "Step-by-step technical documentation", scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 2, cyber: 3 } },
        { text: "Experiments, data analysis, and research papers", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 } }
      ]
    },
    {
      question: "What kind of problems excite you to solve?",
      answers: [
        { text: "How can we make this app more user-friendly?", scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 1, data: 0, cyber: 0 } },
        { text: "How can we reach more customers effectively?", scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 } },
        { text: "How can we disrupt this industry?", scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "How can we make this system more secure?", scores: { ux: 0, marketing: 0, entrepreneur: 1, cs: 2, data: 1, cyber: 3 } }
      ]
    },
    {
      question: "Which achievement would make you most proud?",
      answers: [
        { text: "Designing an app that millions of people love using", scores: { ux: 3, marketing: 1, entrepreneur: 2, cs: 2, data: 0, cyber: 0 } },
        { text: "Creating a viral campaign that changes public opinion", scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 } },
        { text: "Building a startup that creates thousands of jobs", scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "Discovering insights that advance scientific knowledge", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 } }
      ]
    },
    {
      question: "What's your approach to handling challenges?",
      answers: [
        { text: "I focus on understanding users and their needs", scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 1, data: 1, cyber: 1 } },
        { text: "I research market trends and competitor strategies", scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 1, data: 2, cyber: 1 } },
        { text: "I think big picture and rally others to the vision", scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 } },
        { text: "I break down the problem into logical steps", scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 3, cyber: 3 } }
      ]
    },
    {
      question: "Which future technology trend excites you most?",
      answers: [
        { text: "Virtual and Augmented Reality interfaces", scores: { ux: 3, marketing: 1, entrepreneur: 2, cs: 2, data: 1, cyber: 1 } },
        { text: "Social media and influencer platforms", scores: { ux: 2, marketing: 3, entrepreneur: 2, cs: 1, data: 1, cyber: 0 } },
        { text: "Artificial Intelligence and Machine Learning", scores: { ux: 1, marketing: 1, entrepreneur: 2, cs: 3, data: 3, cyber: 2 } },
        { text: "Cybersecurity and digital privacy", scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 2, cyber: 3 } }
      ]
    }
  ];

  const handleAnswer = (answerIndex) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores = { ux: 0, marketing: 0, entrepreneur: 0, cs: 0, data: 0, cyber: 0 };
    
    Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
      const questionScores = questions[questionIndex].answers[answerIndex].scores;
      Object.entries(questionScores).forEach(([major, points]) => {
        scores[major] += points;
      });
    });

    const maxScore = questions.length * 3; // Maximum possible score per major
    const results = Object.entries(scores)
      .map(([key, score]) => ({
        major: key,
        score,
        percentage: Math.round((score / maxScore) * 100),
        ...majors[key]
      }))
      .sort((a, b) => b.score - a.score);

    setResults(results);
    setShowResults(true);
  };

  const [results, setResults] = useState([]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
    setResults([]);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h1 className="text-5xl font-bold text-white mb-4">
              TechPath Quiz
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover your perfect tech major in just 3 minutes!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(majors).map(([key, major]) => (
                <div key={key} className={`bg-gradient-to-r ${major.color} p-4 rounded-xl text-white text-center`}>
                  <div className="flex justify-center mb-2">
                    {major.icon}
                  </div>
                  <p className="text-sm font-medium">{major.name}</p>
                </div>
              ))}
            </div>

            <div className="text-white/70 mb-8">
              <p className="mb-2">✨ 10 smart questions</p>
              <p className="mb-2">🎯 Personalized recommendations</p>
              <p className="mb-2">💼 Real career insights</p>
            </div>

            <button
              onClick={startQuiz}
              className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const topMatch = results[0];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Your Perfect Match!</h1>
              <p className="text-white/80">Based on your answers, here are your top tech major recommendations:</p>
            </div>

            {/* Top Match */}
            <div className={`bg-gradient-to-r ${topMatch.color} rounded-2xl p-8 mb-8 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {topMatch.icon}
                  <div>
                    <h2 className="text-2xl font-bold">{topMatch.name}</h2>
                    <p className="text-white/80">Your #1 Match</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{topMatch.percentage}%</div>
                  <p className="text-white/80">Match</p>
                </div>
              </div>
              
              <p className="text-lg mb-6">{topMatch.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Key Skills:</h3>
                  <ul className="space-y-1">
                    {topMatch.skills.map((skill, idx) => (
                      <li key={idx} className="text-white/90">• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Career Paths:</h3>
                  <ul className="space-y-1">
                    {topMatch.careers.map((career, idx) => (
                      <li key={idx} className="text-white/90">• {career}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between mt-6 pt-6 border-t border-white/20">
                <div>
                  <p className="text-white/80">Salary Range</p>
                  <p className="font-bold text-lg">{topMatch.salary}</p>
                </div>
                <div>
                  <p className="text-white/80">Job Growth</p>
                  <p className="font-bold text-lg">{topMatch.growth}</p>
                </div>
              </div>
            </div>

            {/* Other Matches */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {results.slice(1, 3).map((result, idx) => (
                <div key={result.major} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-gradient-to-r ${result.color} p-2 rounded-lg text-white`}>
                      {result.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{result.name}</h3>
                      <p className="text-white/60">#{idx + 2} Match - {result.percentage}%</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{result.description}</p>
                  <div className="text-xs text-white/60">
                    <p>Salary: {result.salary} • Growth: {result.growth}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-white/60 text-sm mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all hover:scale-[1.02] ${
                    answers[currentQuestion] === idx
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } border border-white/20`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                answers[currentQuestion] === undefined
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-white text-purple-900 hover:bg-white/90'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorQuizApp;