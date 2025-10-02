const circle = document.querySelector('.circle');


circle.addEventListener('click', () => {
  circle.style.background = circle.style.background === 'blue' ? 'crimson' : 'blue';

  let MaxHieght = Math.random()*100;
  let MaxWieght = Math.random()*100;

  circle.style.top = "calc( "+MaxHieght+ "vh - 100px)";
  circle.style.left="calc( "+MaxWieght+ "vh - 100px)";
  if(MaxHieght==0);
});
