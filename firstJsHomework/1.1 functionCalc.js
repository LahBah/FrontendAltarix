function calc(firstNumber, operator, secondNumber){	
	firstNumber = +firstNumber;
	secondNumber= +secondNumber;
	if ((isNaN(firstNumber) == true) || (isNaN(secondNumber) == true)){
		return('Операнды не являются числами');
	}
	else{
		switch(operator){
			case '+':
				return(firstNumber+secondNumber);
				break;
			case '-':
				return(firstNumber-secondNumber);
				break;
			case '*':
				return(firstNumber*secondNumber);
				break;
			case '/':
				return(firstNumber/secondNumber);
				break;
			default:
				return('Передан неизвестный оператор');		
		}
	}
}
alert(calc('100', '*', '-1')); //'значение первого операнда', 'оператор (+, -, *, /)', 'значение второго операнда'.





