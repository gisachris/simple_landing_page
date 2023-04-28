document.addEventListener('DOMContentLoaded', () => {
  // creating variables
  const flow = document.querySelector('.homepage');
  const talentHolder = document.createElement('section');
  talentHolder.classList.add('toptalent');

  // header to talent section
  const talentHead = document.createElement('article');
  talentHead.classList.add('toptalentheader');
  flow.appendChild(talentHolder);

  // parts of the header
  const talentH2 = document.createElement('h2');
  talentH2.classList.add('talentheader');
  talentH2.textContent = 'Our Top Talents';

  const talentImg = document.createElement('img');
  talentImg.classList.add('line');
  talentImg.src = 'assets/images/patterns/underline.png';
  talentImg.setAttribute('alt', 'a line for the page');

  talentHead.append(talentH2, talentImg);
  talentHolder.appendChild(talentHead);

  // end of title section
  // start to lawyers section

  const lawyersContainer = document.createElement('div');
  lawyersContainer.classList.add('tcontainer');
  talentHolder.append(lawyersContainer);

  const talents = [
    {
      img: 'assets/images/act/lawyerp1.jpg',
      header: 'Consultation',
      description: 'Skilled proffesionals when it comes to consultations',
      paragraph: 'Find the best consultation lawyers worldwide here on our paltform ready to discuss with you 24/7.advise and explain situations and cases and so much more',
    },
    {
      img: 'assets/images/act/lawyerp3.jpg',
      header: 'Internship',
      description: 'As Skilled proffesionals we give internships to grow the people of tommorow',
      paragraph: 'Find the best Intern lawyers worldwide here on our paltform ready to learn how the industry works.advise and explainations are given throughout on how to join',
    },
    {
      img: 'assets/images/act/lawyerp2.jpg',
      header: 'Arbitration',
      description: 'Skilled proffesionals when it comes to Arbitration',
      paragraph: 'arbitration is a process for resolving a dispute between two or more parties without going to court.we hear evidence and arguments from both sides and then make a binding decision.',
    },
    {
      img: 'assets/images/act/lawyerp5e.jpg',
      header: 'Mediation',
      description: 'Skilled proffesionals when it comes to Mediation',
      paragraph: 'Best methods of alternative dispute resolution (ADR) where a neutral third party, the mediator, helps parties in a dispute to negotiate a resolution to their conflict.',
    },
    {
      img: 'assets/images/act/lawyerp4e.png',
      header: 'Networking',
      description: 'Skilled proffesionals when it comes to Networking',
      paragraph: 'Best acts of building and maintaining professional relationships for the purpose of exchanging information and creating business opportunities.',
    },
    {
      img: 'assets/images/act/lawyerp6.jpg',
      header: 'Globalisation',
      description: 'Skilled proffesionals when it comes to growing our reach',
      paragraph: 'Best process by which national and regional economies, societies, and cultures are becoming increasingly interconnected and integrated with each other',
    },
  ];

  for (let i = 0; i < talents.length; i++ /* eslint-disable-line no-plusplus */) {
    const selection = talents[i];
    const {
      img, header, description, paragraph,
    } = selection;
    const lawyerIndividual = document.createElement('section');
    lawyerIndividual.classList.add('talent1container');
    lawyersContainer.append(lawyerIndividual);

    const lawyerImages = document.createElement('span');
    lawyerImages.classList.add('backcube');
    lawyerIndividual.append(lawyerImages);

    const imageFig1 = document.createElement('figure');
    imageFig1.classList.add('bkdesign');
    imageFig1.innerHTML = '<img src="assets/images/act/pattern4.jpg" alt="some pattern">';

    const imageFig2 = document.createElement('figure');
    imageFig2.classList.add('imgdesign');
    imageFig2.innerHTML = `<img src="${img}">`;

    lawyerImages.append(imageFig1, imageFig2);

    const lawyerArticle = document.createElement('article');
    lawyerArticle.classList.add('talentdesc');
    lawyerIndividual.append(lawyerArticle);

    const articleHeading = document.createElement('h2');
    articleHeading.classList.add('talentheading');
    articleHeading.textContent = `${header}`;

    const articleDesc = document.createElement('span');
    articleDesc.classList.add('someinfo');
    articleDesc.textContent = `${description}`;

    const articlePar = document.createElement('p');
    articlePar.classList.add('talentpar');
    articlePar.textContent = `${paragraph}`;

    lawyerArticle.append(articleHeading, articleDesc, articlePar);

    if (i > 1) {
      lawyerIndividual.classList.add('expandables');
    }
  }

  // start to accordion

  const button = document.createElement('button');
  button.setAttribute('class', 'expand');
  button.textContent = 'More';
  lawyersContainer.append(button);

  button.addEventListener('click', () => {
    button.classList.toggle('extend');
    button.classList.toggle('expand');
    if (button.classList.contains('expand')) {
      button.textContent = 'More';
    } else if (button.classList.contains('extend')) {
      button.textContent = 'Less';
    }

    const lawyerArray = document.querySelectorAll('.talent1container');
    const expandables = Array.from(lawyerArray).slice(2);
    for (let j = 0; j < expandables.length; j++ /* eslint-disable-line no-plusplus */) {
       expandables[j].classList.toggle('expandables');
    }
  });
});