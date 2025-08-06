

  function add(number1,number2) {
  return number1 + number2;
  }

  function subtract(number1,number2) {
  return number1 - number2;
  }

  function multiply(number1,number2) {
  return number1 * number2;
  }

  function divide(number1,number2) {
  return number1 / number2;
  }

document.getElementById('add').addEventListener('click', ()=>{
  let number1 = parseFloat(document.getElementById('number1').value);
  let number2 = parseFloat(document.getElementById('number2').value);
  const result = add(number1,number2)
  document.getElementById('calculation-result').textContent = result;
 });

 document.getElementById('subtract').addEventListener('click', ()=>{
  let number1 = parseFloat(document.getElementById('number1').value);
  let number2 = parseFloat(document.getElementById('number2').value);
  const result = subtract(number1,number2)
  document.getElementById('calculation-result').textContent = result;
 });

 document.getElementById('multiply').addEventListener('click', ()=>{
  let number1 = parseFloat(document.getElementById('number1').value);
  let number2 = parseFloat(document.getElementById('number2').value);
  const result = multiply(number1,number2)
  document.getElementById('calculation-result').textContent = result;
 });

 document.getElementById('divide').addEventListener('click', ()=>{
  let number1 = parseFloat(document.getElementById('number1').value);
  let number2 = parseFloat(document.getElementById('number2').value);
  const result = divide(number1,number2)
  document.getElementById('calculation-result').textContent = result;
 });
