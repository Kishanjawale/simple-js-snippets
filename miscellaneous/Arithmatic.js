//arithmetic in js

function sum(index1,index2) {
    return index1 + index2;
  }
  
  
  function multiply(index1,index2) {
    return index1 * index2;
  }
  
  function divide(index1,index2) {
    return index1 / index2;
  }
  
  
  function doArithmetic(firstEl,secondEl,whatToDo) {
   if(whatToDo === "sum") {
     var answer= sum(firstEl,secondEl);
     return answer;
  }
    if(whatToDo === "multiply") {
      var answer = multiply(firstEl,secondEl);
      return answer;
    }
  }
  var answer = doArithmetic(5,2,"multiply");
  console.log(answer)