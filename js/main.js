const snow = document.getElementById('snow');
const snowflakes = document.getElementById('snowflakes');

window.addEventListener('mousemove', (event) => {
  const x = (event.clientX - window.innerWidth/2) / 50;
  const y = (event.clientY - window.innerHeight/2) / 50;
  console.log(snowflakes, x, y) 
  snowflakes.style.transform = `translateX(${x}px) translateY(${y}px)`;
  snow.style.transform = `translateX(${x*5}px) translateY(${y*5}px)`;
})