function zeroKiller(number){
	if (((number.toString().includes('.')) ? (number.toString().split('.').pop().length) : (0)) === 0){
		number = number.toFixed();
	}
	else{
		number = number.toFixed(2);
	}
	var prise = String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return prise;
}
alert(zeroKiller(-86656.2342));
//строка 2-7 - сделал проверку на наличие знаков после запятой.
//Если введенное число целое, то на выходе будет число без точки.
//Пример №1: введенное число 1234 на выходе будет 1 234, а не 1 234.00;
//Пример №2: введенное число 3835.1948 на выходе будет 3 835.19;


