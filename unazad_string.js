function spinWords(recenica) {
	let unazad = [];
	let res = recenica.split(' ');
	res.forEach((word) => {
		if (word.length >= 5) {
			let newWord = word.split('');
			newWord.reverse();
			let nova = newWord.join('');
			unazad.push(nova);
		} else {
			unazad.push(word);
		}
	});

	console.log(unazad.join(' '));
}

spinWords('This is another test');
