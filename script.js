"use strict";
function sumInput() {
  let justDoIt = true,
  number   = null,
  nums = [],
  sum = 0;
    do{
        let num = prompt("Введите число:");
        
        if(num === null || num.trim() === ''){ 
          justDoIt = false;
        }else if((num = parseFloat(num)) && !isNaN(num))           
          nums.push(num); 
        }      while(justDoIt);

      
      if(nums.length > 0){
        nums.sort();  
        alert(`Вы ввели ряд чисел: ${nums.join(', ')}`);
      };    
   
    for (let i = 0; i < nums.length; i++)
        { sum += nums[i];}
        alert(`Сумма введенных чисел: ${sum}`);
    }
       





           
    

    

