function find(arr, str){
	var mapped = arr.map(function(element){
		return element.toLowerCase();
	});
		return(mapped.indexOf(str) != -1);
}
alert(find(['Пётр', 'Василий', 'Мария', 'Екатерина', 'Logan', 'Jack', 'Isabella', 'Elizabeth'], 'elizabeth'));
           