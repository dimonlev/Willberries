const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img")

const left = document.getElementById("arrow-left")
const right = document.getElementById("arrow-right")

let idx = 0;

function runLeft() {

  if (idx < img.length - 3) {
    idx++;
  }
  imgs.style.transform = `translateX(${-idx * 360}px)`;
}

function runRight() {
  idx = 0;
  if (idx > img.length - 3) {
    idx++;
  }
  imgs.style.transform = `translateX(${idx * 360}px)`;
}

left.addEventListener('click', runRight)
right.addEventListener('click', runLeft)


// setInterval(run, 2000)