// Task 1

var myAge=18;
function checkVotingEligibility() {
  if (myAge>=18){
    console.log('you are eligible for voting')
}
else{

    console.log('you are  not eligible for voting')
} 

}


// Task 2

var i=0;

function printNumbersWithWhile() {
 
while (i<6) {
    console.log(i);
    i++;  
}



}





// Task 3
function printEvenNumbersWithFor() {


  for(var i=2;i<11; i++) {
   
    if(i%2==0)
    console.log(i);
  }

}

// Task 4
var day=7; 

function getDayOfWeek() {

  switch(day) {

   case 1:
    console.log('Sunday')
      break;
      case 2:
        console.log('Monday')
          break;
          case 3:
    console.log(' Tuesday')
      break;
      case 4:
    console.log('Wednesday')
      break;
      case 5:
    console.log('Thursday')
      break;
      case 6:
        console.log('friday')
          break;

   default:
    console.log('Saturday')
    break;

}



}

// Task 5
function sum() {

  function sum(num1,num2) {
    console.log(num1+num2) 
    
  }
  sum(100,490);


}

// Task 6

  const fruits = ['Cherry','Blueberry','Mango','Banana']
  

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
