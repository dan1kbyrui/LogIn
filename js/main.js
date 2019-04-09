(function () {
	var logInBtn = document.querySelector('.btn');
	logInBtn.onclick = Log;
})();

function Log() {
	var login = 'admin',
	password = 'Черный Властелин',
	a = prompt('Логин: ');

	logInDesc = document.querySelector('.output');

	if (a == login) {
		var b = prompt('Пароль: ');
		if (b == password) {
			logInDesc.innerHTML = 'Вы успешно вошли в систему!';

		} else {
			logInDesc.innerHTML = 'Пароль отклонен!';
		}

	} else {
		logInDesc.innerHTML = 'Мы таких не знаем!';
	}
}