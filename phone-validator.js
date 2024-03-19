if (typeof document !== 'undefined') {
    
const input = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const numbers = document.querySelector(".numbers");


const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regexPhone = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  ); 


const btns = document.querySelectorAll(".btn")
let buttonArray = [...btns]

buttonArray.forEach((btn) => btn.addEventListener("click", () => input.value += btn.value))

 clearBtn.addEventListener('click', () => {
    input.value = "";
    numbers.style.display = "grid";
    resultsDiv.innerHTML = ""
 }) 
 
// btn delete event listener
 buttonArray[buttonArray.length - 3].addEventListener("click", () => {
    let inputValue = input.value;
    let newValue = inputValue.slice(0, -1);
    input.value = newValue;
    })

checkBtn.addEventListener('click', () => {
    

    if(input.value === "") {
        alert("Please provide a phone number")
    }else if(input.value.match(regexPhone)) {
        numbers.style.display = "none";
        resultsDiv.innerHTML = `<h3 style="color:green;">Valid US number: ${input.value}</h3>`
    } else {
        numbers.style.display = "none";
        resultsDiv.innerHTML = `<h3 style="color:red;">Invalid US number: ${input.value}</h3>`
    }    
    })


}
