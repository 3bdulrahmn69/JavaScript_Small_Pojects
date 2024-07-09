const projectList = [
  {
    name: 'HexColors Generator',
    description: 'A simple hex colors generator',
    href: 'theProjects/HexColors/index.html',
  },
  {
    name: 'Random Quote Generator',
    description: 'A simple random quote generator',
    href: 'theProjects/QuoteGenerator/index.html',
  },
  {
    name: 'Counter',
    description: 'A simple counter',
    href: 'theProjects/Counter/index.html',
  },
  {
    name: 'To Do List',
    description: 'A simple to do list',
    href: 'theProjects/ToDoList/index.html',
  },
  {
    name: 'Clock',
    description: 'A simple clock',
    href: 'theProjects/Clock/index.html',
  },
  {
    name: 'Calculator',
    description: 'A simple calculator',
    href: 'theProjects/Calculator/index.html',
  },
  {
    name: 'Weather App',
    description: 'A simple weather app',
    href: 'theProjects/Weather/index.html',
  },
  {
    name: 'Quiz',
    description: 'A simple quiz',
    href: 'theProjects/Quiz/index.html',
  },
];

const projectListContainer = document.getElementById('projectList');

projectList.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('projectCard');

  const projectName = document.createElement('h2');
  projectName.classList.add('name');
  projectName.textContent = project.name;

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('desc');
  projectDescription.textContent = project.description;

  const projectLink = document.createElement('a');
  projectLink.classList.add('link');
  projectLink.href = project.href;
  projectLink.target = '_blank';
  projectLink.rel = 'noopener noreferrer';
  projectLink.textContent = 'View Project';

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(projectLink);

  projectListContainer.appendChild(projectCard);
});
