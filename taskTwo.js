let employeeSalaries = {
	first: 1000,
	second: 2134,
	third: 25030,
	fourth: null
};

for (var key in employeeSalaries) {
	if (employeeSalaries[key] == null)
		console.log('Працівник ' + key + ' заробляє - ' + 0);
	else
		console.log('Працівник ' + key + ' заробляє - ' + employeeSalaries[key]);
}