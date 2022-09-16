function math(a, b, toDo) {
	if (toDo == '+') return a + b;
	else if (toDo == '-') return a - b;
	else if (toDo == '*') return a * b;
	else if ((toDo == '/') || (toDo == ':')) return a / b;
	else console.log('Error: unexpective char - ' + toDo);
}

console.log(math(2,7,'+'));
console.log(math(2,7,'-'));
console.log(math(2,7,'*'));
console.log(math(2,7,'/'));
console.log(math(2,7,'a'));