let box = document.querySelector('.box');
let runner = document.querySelector('.BEGUNOK')

function debouns(fn, ms) {
	let timeout;
	return function () {
		const fnCall = () => { fn.apply(this, arguments) }
		clearTimeout(timeout);
		timeout = setTimeout(fnCall, ms);
	}
}

function createTable(x) {
	let n = x;
	let arrayPoint = [];
	let arrayElem = [];

	let zeroPoint = n - n;

	arrayPoint.push(zeroPoint);

	for (let i = zeroPoint; i < n; i++) {
		let point = document.createElement('div');

		let nextPoint = arrayPoint[arrayPoint.length - 1] + n + 1;
		arrayPoint.push(nextPoint);

		point.classList.add('row');
		box.append(point);

		for (let j = zeroPoint; j < n; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.innerHTML = [i, j];
			point.append(cell);
			arrayElem.push(cell);
		}
	}

	let arrayColor = [];

	arrayElem.forEach((elem, index) => {
		arrayPoint.forEach((e) => {
			if (e === index) {
				elem.classList.add('color');
				arrayColor.push(elem);
			}
		})

		arrayColor.forEach((i) => {
			if (elem.textContent > i.textContent && elem.textContent[0] === i.textContent[0]) {
				elem.classList.add('color');
			}
		});
	});
}

function animation(prop) {
	let cellAnime = document.querySelectorAll('.cell');
	cellAnime.forEach((cell) => {
		if (prop) {
			cell.classList.remove('sheik');
		} else cell.classList.add('sheik');
	});
}

createTable(4);

runner.addEventListener('input', debouns(() => {
	n = Number(runner.value)

	let arrayRow = document.querySelectorAll('.row')
	arrayRow.forEach((a) => {
		a.remove();
	})
	createTable(n);
	animation('remove');
}, 400));

runner.addEventListener('input', () => animation());

animation()
	// TODO спросить у Марка, почему ругается, если в аргумент функции animation передвать не строку, ругается
