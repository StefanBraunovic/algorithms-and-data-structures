function createPhoneNumber(arr) {
	let mask = '(xxx) xxx-xxxx';

	arr.forEach((item) => {
		mask = mask.replace('x', item);
	});

	return mask;
}
