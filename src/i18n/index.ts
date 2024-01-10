import { createI18n } from 'vue-i18n';
import pluralizationRules from '@/i18n/rules/pluralization';

const messages = {
  'en-US': {
    quizzes: {
      vueBasics: {
        title: 'Vue Basics',
        description: 'Test your knowledge of Vue.js fundamentals',
      },
    },
    questions: 'Questions',
    startQuiz: 'Start Quiz',
  },
  'pl-PL': {
    quizzes: {
      vueBasics: {
        title: 'Podstawy Vue',
        description: 'Sprawdź swoją wiedzę na temat podstaw Vue.js',
      },
    },
    questions: 'Pytania',
    startQuiz: 'Rozpocznij Quiz',
  },
};

export default createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  legacy: false,
  globalInjection: true,
  messages,
  pluralizationRules,
});