import { useRef } from "react";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

function ImageSlider({ images, onClickImage, activeId }) {
	const sliderRef = useRef(null)
	const slider = sliderRef.current;

	const scrollAmount = 40;

	function handleLeftClick() {
		console.log(slider.scrollLeft)
		slider.scrollLeft -= scrollAmount;
	}

	function handleRightClick() {
		slider.scrollLeft += scrollAmount;
	}

	return (
		<div className="image-slider">
			<LeftIcon onClick={handleLeftClick} />
			<div className="image-wrapper" ref={sliderRef} >
				{
					images.map(image => 
						<button key={image.id} id={image.id == activeId ? "active-image" : ''} onClick={() => onClickImage(image.id)} >
							<img src={image.urls.regular} alt={image.alt_description} />
						</button>
					)
				}	
			</div>
			<RightIcon onclick={handleRightClick} />
			
		</div>
	)
}

export default ImageSlider;