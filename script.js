import { teams } from './data.js';

const formatCompactNumber = (number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
};

const handleDinamicText = (element, text, nameClass) => {
  const createEl = document.createElement(element);
  createEl.innerText = text;
  if (nameClass) {
    createEl.classList.add(nameClass);
  }
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

const handleSubListPlayer = (positionArr) => {
  const createSubList = document.createElement('ul');
  for (let index = 0; index < positionArr.length; index++) {
    const element = positionArr[index];
    createSubList.appendChild(handleDinamicText('li', element));
  }
  return createSubList;
};

const handleRenderSquads = (squad) => {
  const squadsElement = document.querySelector('.squads');
  const createUl = document.createElement('ul');
  const playersKeys = Object.keys(squad.players);

  for (let index = 0; index < playersKeys.length; index++) {
    const element = playersKeys[index];
    createUl.appendChild(handleDinamicText('li', element, 'position'));
    console.log(element);
    if (Array.isArray(squad.players[element])) {
      createUl.appendChild(handleSubListPlayer(squad.players[element]));
    } else {
      createUl.appendChild(handleDinamicText('li', squad.players[element]));
    }
  }
  squadsElement.appendChild(createUl);
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
  const squadsEl = document.querySelector('.squads');
  let country;
  for (let index = 0; index < teams.length; index++) {
    const element = teams[index];
    if (element.code === elementClass) {
      country = element;
    }
  }
  squadsEl.innerHTML = '';
  handleRenderSquads(country);
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
