

    let sum;
    let array = [];

function sumInput() {
    for (i=0; i<array.length; i++) {
      array[i] = +prompt('Введите пожалуйста число', +i);
       if (!array[i]) break;
       if (array[i] !== isNan) break;
       if (array[i] === null) break;
       sum += array[i];
    }
    array.sort();
    alert(array);
    alert('cумма:' + sum);
    }