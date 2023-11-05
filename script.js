let inputDir={x:0,y:0};
const foodSound=new Audio('/music/food.mp3');
const gameOverSound=new Audio('/music/gameover.mp3');
const moveSound=new Audio('/music/move.mp3');
const musicSound=new Audio('/music/music.mp3'); 
let score=0;
// let sakeElement;
let speed=5;
let lastPainTime=0;
let snakeArray=[
    {x:13,y:15}
]
let food={x:6,y:7};

// functions
     function main(ctime){
        window.requestAnimationFrame(main);
        // console.log(ctime)
         if((ctime-lastPainTime)/1000< 1/speed){
             return;
         }
         lastPainTime=ctime;
         gameEngine();
        }
         function gameEngine(){
                   // part 1: updatig snake variable & food
                   function isCollide(snake){
                      // if you bump into yourdelf
                      for(let i=1;i<snake.length;i++){
                        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
                            return true;
                        }
                       
                      }
                      if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
                        return true

                    }
                    return false;
               }

                if(isCollide(snakeArray)){
                     gameOverSound.play();
                     musicSound.pause();
                     inputDir={x:0,y:0};
                     alert("Game Over, Press any key to play again");
                     snakeArray=[{x:13,y:15}];
                     musicSound.play();
                     score=0;
                }
                if(snakeArray[0].y===food.y && snakeArray[0].x===food.x){
                     foodSound.play();
                             snakeArray.unshift({x:snakeArray[0].x+inputDir.x,y:snakeArray[0].y+inputDir.y})
                             let a=2;
                             let b=16;
                             food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
                }

                // moving the snake
                for(let i=snakeArray.length-2;i>=0;i--){
                        // const element=snakeArray[i];
                        snakeArray[i+1]={...snakeArray[i]};
                }
                snakeArray[0].x +=inputDir.x;
                snakeArray[0].y +=inputDir.y;
                

                     // prt 2: render the snake and food
                     board.innerHTML="";
                     snakeArray.forEach((e,index)=>{
                                  snakeElement=document.createElement('div');
                                  snakeElement.style.gridRowStart=e.y;
                                  snakeElement.style.gridColumnStart=e.x;
                                  snakeElement.classList.add('snake');
                                  if(index===0){
                                    snakeElement.classList.add('head');
                                  }
                                  else{
                                    snakeElement.classList.add('snake')
                                  }
                                  board.appendChild(snakeElement);
                     });
                           //displaying the food
                                  foodElement=document.createElement('div');
                                  foodElement.style.gridRowStart=food.y;
                                  foodElement.style.gridColumnStart=food.x;
                                  foodElement.classList.add('food');
                                  board.appendChild(foodElement);


         }

   

         
       
     

  
    
/// game logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
       inputDir={x:0,y:1}// start the game
       moveSound.play();
       switch(e.key){
        case"ArrowUp":
          console.log("ArrowUp");
          inputDir.x= 0;
          inputDir.y= -1;
           break;

        case"ArrowDown":
          console.log("ArrowDown");
          inputDir.x= 0;
          inputDir.y= 1;
           break;

        case"ArrowLeft":
           console.log("ArrowLeft");
           inputDir.x= -1;
           inputDir.y= 0;
            break;

        case"ArrowRight":
            console.log("ArrowRight");
            inputDir.x= 1;
            inputDir.y= 0;
             break;
        default:
             break;
       }
})

