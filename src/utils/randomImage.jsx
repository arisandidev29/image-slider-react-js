export function randomImage(title = 'null') {
	let emptyAry = []
	for (let count = 0; count < 100; count++) {
		emptyAry.push(`https://source.unsplash.com/random/1280x720/?mount&${count}`;
	}

	const images = emptyAry.map((image, index) => {
		return {
			id: index + 1,
			img: image
		}
	})

	return images;
}