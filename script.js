import { teams } from './data.js';

function formatCompactNumber(number) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
}

const handleDinamicText = (element, text) => {
  const createEl = document.createElement(element);
  createEl.innerText = text;
  return createEl;
};
