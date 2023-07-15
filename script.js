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
  createDiv.classList.add(country.code);
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

const handleTeams = () => {
  const teamsEl = document.querySelector('.teams');
  for (let index = 0; index < teams.length; index += 1) {
    const element = teams[index];
    teamsEl.appendChild(handleCreateElement(element));
  }
};

const handleClickSquads = (event) => {
  const elementClass = event.target.parentElement.className;
  let country;
  for (let index = 0; index < teams.length; index++) {
    const element = teams[index];
    if (element.code === elementClass) {
      country = element;
    }
  }
  console.log(country);
};

const handleSquads = () => {
  const countries = document.querySelectorAll('.teams > div');
  for (let index = 0; index < countries.length; index += 1) {
    countries[index].addEventListener('click', handleClickSquads);
  }
};

window.onload = () => {
  handleTeams();
  handleSquads();
};
