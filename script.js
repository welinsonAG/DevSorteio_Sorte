function generateNumber () {

  const minInput = Math.ceil(document.querySelector(".input-min").value)
const maxInput = Math.floor(document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;

alert(result);
  
}
