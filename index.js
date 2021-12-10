let images=["img/dice1.png","img/dice2.png","img/dice3.png","img/dice4.png","img/dice5.png","img/dice6.png"];
let header=document.getElementById('header');
let btn=document.querySelector('button');

btn.addEventListener('click',function(){
   let randomNumber1=Math.floor(Math.random()*6);
   let randomNumber2=Math.floor(Math.random()*6);
   let src1=document.querySelector('#img1');
   let src2=document.querySelector('#img2');
   src1.src=images[randomNumber1];
   src2.src=images[randomNumber2];
   if(randomNumber1>randomNumber2)
   {
       header.textContent="player 1 won!";
   }
   else if(randomNumber2>randomNumber1)
   {
       header.textContent="player 2 won!";
   }
   else
   {
       header.textContent="draw!";
   }
});
@media(max-width:800px)
{
   button
   {
      margin-top:5%;
   }
}
