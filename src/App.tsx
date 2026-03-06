import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  ChevronLeft, 
  Check, 
  RefreshCw, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { QUIZ_QUESTIONS, QuizAnswers } from './types';

const INITIAL_ANSWERS: QuizAnswers = {
  objetivo_foto: '',
  estilo_visual: '',
  emocao: '',
  enquadramento: '',
  pose: '',
  roupa: '',
  acessorios: '',
  ambiente: '',
};

const WHATSAPP_NUMBER = '5591981305395';

export default function App() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleStart = () => setStep('quiz');

  const handleAnswer = (value: string) => {
    const variable = currentQuestion.variable as keyof QuizAnswers;
    const newAnswers = { ...answers, [variable]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('result');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep('intro');
    }
  };

  const sendToWhatsApp = () => {
    const message = `Olá, acabei de responder o quiz de retrato e quero criar minha foto.

Meu plano de foto é:

Objetivo da foto: ${answers.objetivo_foto}
Estilo visual: ${answers.estilo_visual}
Emoção: ${answers.emocao}
Enquadramento: ${answers.enquadramento}
Pose: ${answers.pose}
Roupa: ${answers.roupa}
Acessórios: ${answers.acessorios}
Ambiente: ${answers.ambiente}

Gostaria de gerar minhas fotos com essas características.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetQuiz = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers(INITIAL_ANSWERS);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-emerald-100">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-200 mb-4">
                <Camera size={40} />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
                  Planejamento de Retrato <span className="text-emerald-600">Pro</span>
                </h1>
                <p className="text-lg text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Crie seu briefing fotográfico em segundos e receba atendimento personalizado via WhatsApp.
                </p>
              </div>
              <div className="pt-8">
                <button
                  onClick={handleStart}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neutral-950 text-white rounded-2xl font-semibold text-lg hover:bg-neutral-800 transition-all active:scale-95 shadow-lg shadow-neutral-200"
                >
                  Começar Planejamento
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <p className="mt-4 text-sm text-neutral-400">Rápido e intuitivo</p>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="p-2 -ml-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex gap-1">
                  {QUIZ_QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentQuestionIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-neutral-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-neutral-400">
                  {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-950 leading-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.variable as keyof QuizAnswers] === option.label;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.label)}
                        className={`group flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/50 text-emerald-900'
                            : 'border-neutral-100 hover:border-neutral-200 hover:bg-white'
                        }`}
                      >
                        <span className="font-medium">{option.label}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white"
                          >
                            <Check size={14} strokeWidth={3} />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-10"
            >
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-2">
                  <Check size={32} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-950">Seu Plano de Retrato</h2>
                <p className="text-neutral-500">Confira o resumo do seu briefing abaixo.</p>
              </div>

              <div className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Objetivo da Foto</p>
                    <p className="font-medium text-neutral-800">{answers.objetivo_foto}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Estilo Visual</p>
                    <p className="font-medium text-neutral-800">{answers.estilo_visual}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Emoção</p>
                    <p className="font-medium text-neutral-800">{answers.emocao}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Enquadramento</p>
                    <p className="font-medium text-neutral-800">{answers.enquadramento}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Pose</p>
                    <p className="font-medium text-neutral-800">{answers.pose}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Roupa</p>
                    <p className="font-medium text-neutral-800">{answers.roupa}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Acessórios</p>
                    <p className="font-medium text-neutral-800">{answers.acessorios}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Ambiente</p>
                    <p className="font-medium text-neutral-800">{answers.ambiente}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={sendToWhatsApp}
                  className="w-full group relative flex items-center justify-center gap-3 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-100"
                >
                  <MessageCircle size={24} />
                  Enviar meu plano pelo WhatsApp
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full flex items-center justify-center gap-2 py-4 text-neutral-500 font-semibold hover:text-neutral-950 transition-colors"
                >
                  <RefreshCw size={18} />
                  Refazer Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
