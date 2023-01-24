import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = () => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  return surpriseMePrompts[randomIndex];
}