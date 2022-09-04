  let par = document.getElementById("par");
  let strokes = document.getElementById("strokes");
  let click = document.getElementById("click");
  let text = document.getElementById("text");


  // by click on the button get function and result 
  click.addEventListener('click', ()=> {
      let answer = golfScore(par.value, strokes.value)
      text.innerText = answer
      
        // if - answer == "Please Enter Valid Values" - change color to "red" otherwise - "white"
      answer == "Please Enter Valid Values" ? 
      text.style.color = "red" :
      text.style.color = "#fff"
    
      console.log(golfScore(par.value, strokes.value))
    }
  );


/*Golf Code*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];


function golfScore(par, strokes){
  
  //Convert "par" & "strokes" to number
  par = Number(par);
  strokes = Number(strokes);
  
  if(par > 0 && strokes > 0){
      if (strokes == 1 && par >=1){
      return names[0]
    } 
    else if (strokes <= par -2){
      return names[1]
    } 
    else if (strokes == par -1){
      return names[2]
    } 
    else if (strokes == par){
      return names[3]
    } 
    else if (strokes == par + 1){
      return names[4]
    } 
    else if (strokes == par + 2){
      return names[5]
    } 
    else if (strokes >= par + 3){
      return names[6]
    }
  }
  else{
    return "Please Enter Valid Values"
  }
}


// console.log(golfScore(5, 4))
// console.log(golfScore(5, 2))
// console.log(golfScore(5, 7))
// console.log(golfScore(1, 2))