const container = document.getElementById('container');
const text = document.getElementById('text');
const circle = document.getElementById('circle');

const totalTime = 11000;
const breatheTime = (totalTime / 2);

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In...';
  container.className = 'container grow';
	text.style.color = '#377dce';

  setTimeout(() => {
    setTimeout(() => {
      text.innerText = 'Breathe Out...';
      container.className = 'container shrink';
			text.style.color = '#e9aa0a';
    }, 0);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);