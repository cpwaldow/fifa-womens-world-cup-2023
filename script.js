import { teams } from './data.js';

const formatCompactNumber = (number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
};

const handleDinamicText = (element, text) => {
  const createEl = document.createElement(element);
  createEl.innerText = text;
  return createEl;
};

const handleCreateElement = (country) => {
  const createDiv = document.createElement('div');
  const createImg = document.createElement('img');
  createImg.src = country.flag;
  createDiv.appendChild(createImg);
  createDiv.appendChild(handleDinamicText('p', country.name));
  createDiv.appendChild(handleDinamicText('p', country.region));
  createDiv.appendChild(
    handleDinamicText(
      'p',
      `Population: ${formatCompactNumber(country.population)}`,
    ),
  );
  return createDiv;
};
