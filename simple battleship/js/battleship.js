var randomLoc = Math.floor(Math.random() * 5)
var location1 = randomLoc
var location2 = location1 + 1
var location3 = location2 + 1

var guess
var hits = 0
var guesses = 0
var isSunk = false

while (isSunk == false) {
	guess = prompt('Выбирайте ячейку(от 0 до 6):')
	if (guess < 0 || guess > 6) {
		alert('Введите число от 0 до 6')
	} else {
		guesses += 1
		if (guess == location1 || guess == location2 || guess == location3) {
			hits += 1
			alert('Попадание!')
			if (hits == 3) {
				isSunk = true
				alert('Корабль утонул!')
			}
		} else {
			alert('Промах')
		}
	}
}

var stats =
	'Вы утопили корабль за ' +
	guesses +
	' попыток и ваша точность была равна - ' +
	3 / guesses
alert(stats)
