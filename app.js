// Hello World
console.log("App loaded");

// Navigation
const homePage = document.getElementById('home-page');
const secondPage = document.getElementById('second-page');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');

function showPage(page) {
  homePage.classList.remove('active');
  secondPage.classList.remove('active');
  page.classList.add('active');
}

startBtn.addEventListener('click', () => {
  showPage(secondPage);
});

backBtn.addEventListener('click', () => {
  showPage(homePage);
});
