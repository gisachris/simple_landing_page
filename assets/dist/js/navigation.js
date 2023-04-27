// selecting the navigation
const navigation = document.querySelector('.nav-together');
// const navBar = document.querySelector('.nav-bar');
const hamButton = document.querySelector('.ham-icon');
const xButton = document.querySelector('.X-icon');

hamButton.addEventListener('click', () => {
  navigation.style.display = 'flex';
  xButton.style.display = 'block';
  hamButton.style.display = 'none';
});

xButton.addEventListener('click', () => {
  navigation.style.display = 'none';
  hamButton.style.display = 'block';
  xButton.style.display = 'none';
});

document.addEventListener('scroll', () => {
  navigation.style.display = '';
  hamButton.style.display = '';
  xButton.style.display = '';
});

window.addEventListener('resize', () => {
  navigation.style.display = '';
  hamButton.style.display = '';
  xButton.style.display = '';
});