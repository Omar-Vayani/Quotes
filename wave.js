const paths = document.querySelector("#gentle-wave");
console.log(paths.attributes[1].nodeValue);
let x = 20;
let y = 50;
let dx = 0.03;
let dy = 0.03;
function animate(e) {
  dx = x > 30 ? -dx : dx;
  dx = x < 10 ? -dx : dx;
  dy = y > 60 ? -dy : dy;
  dy = y < 40 ? -dy : dy;
  paths.attributes[1].nodeValue = `M-160 44c30 0 58-18 88-18s 28 ${(x +=
    dx)} ${(y += dy)} 18 58-18 88-${(x += dx) / 1.5} 58 18 88 18 v44h-352z`;
  requestAnimationFrame(animate);
}
animate();
