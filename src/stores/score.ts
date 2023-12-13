import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useQuizScore = defineStore('score', () => {
  const score = ref<number>(0);
  const questionsAmount = ref<number>(0);
  const correctAnswers = ref<number>(0);
  const isQuizCompleted = ref<boolean>(false);

  const incrementScore = (itemWeight: number  ) => {
     score.value += itemWeight;
  };

  const resetScore = () => {
    score.value = 0;
  };

 const setQuizCompleted = () => {
    isQuizCompleted.value = true;
 };

 const setQuestionsAmount = (amount: number) => {
    questionsAmount.value = amount;
 };
 
 watch(score, () => {
    correctAnswers.value += 1;
 });

  return {
    score,
    incrementScore,
    resetScore,
    isQuizCompleted,
    setQuizCompleted,
    questionsAmount,
    correctAnswers,
    setQuestionsAmount,
  };
});
