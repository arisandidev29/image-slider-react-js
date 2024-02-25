function ImageView({ image }) {
	return (
		<img className="image-view" src={image.urls.regular} alt="img" />
	)
}

export default ImageView; 