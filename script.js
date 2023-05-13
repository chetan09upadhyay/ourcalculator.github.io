let string="";
let flag=0;
let buttons = document.querySelectorAll('.button');
let screen = document.getElementById("answer");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    buttonText = e.target.innerHTML;
    if(buttonText  =='='){
      string = eval(string);
      document.querySelector('input').value = string;  
    }
    else  if(buttonText =='C'){
      string = "";
      document.querySelector('input').value = string;  
    }
      else if (buttonText == "X") {
      if (flag == 1) {
        flag = 0;
      
      }
         buttonText = "*";
      string += buttonText;
      screen.value = string;
      }
    else{
   console.log(e.target)
    string = string + buttonText;
    document.querySelector('input').value = string;
    }
  })
})