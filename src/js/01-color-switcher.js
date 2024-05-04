const btn = document.getElementById('btn');
const stop = document.getElementById('stop');


btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor()
    btn.disabled = true;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

(function changeColor() {
    setInterval(() => {
        document.body.style.background = getRandomHexColor();
      },
      1000);
  })();

  stop.addEventListener('click', () => {
    stop.disabled = true;
    btn.disabled = false;
    clearInterval;
});