const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 11000;
const breatheTime = (totalTime / 2);

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In...';
  container.className = 'container grow';

  setTimeout(() => {

    setTimeout(() => {
      text.innerText = 'Breathe Out...';
      container.className = 'container shrink';
    }, 0);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);