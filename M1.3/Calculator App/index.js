function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    const expression = result.value;
    let answer;
  
    if (expression.includes('+')) {
      const operands = expression.split('+');
      const num1 = parseFloat(operands[0]);
      const num2 = parseFloat(operands[1]);
      answer = num1 + num2;
    } else if (expression.includes('-')) {
      const operands = expression.split('-');
      const num1 = parseFloat(operands[0]);
      const num2 = parseFloat(operands[1]);
      answer = num1 - num2;
    } else if (expression.includes('*')) {
      const operands = expression.split('*');
      const num1 = parseFloat(operands[0]);
      const num2 = parseFloat(operands[1]);
      answer = num1 * num2;
    } else if (expression.includes('/')) {
      const operands = expression.split('/');
      const num1 = parseFloat(operands[0]);
      const num2 = parseFloat(operands[1]);
      answer = num1 / num2;
    }
  
    result.value = answer;
  }