import { useEffect, useState } from "react";
import ImageSlider from "./component/ImageSlider";
import ImageView from "./component/ImageView";
function App() {
  const api_key = import.meta.env.VITE_ACCESS_KEY 
  const [initialImages, setInitialImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(
    () => {
      const image = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=mountain&per_page=20&client_id=${api_key}`)
        const data = await response.json()
        setInitialImages(data.results)
        setIsLoading(false)
        setSelectedId(data.results[0].id)
      }
      image()
    }, []
  ) 
   
  const selectedImage = initialImages.find(image => {
    return image.id == selectedId
  }) 
  console.log(selectedImage)
  function handleClickImage(id) {
    setSelectedId(id)
  }


  return (
    <main style={{
      // backgroundImage: `url(${selectedImage.img})`,
    }}>
      {
        isLoading && <h1>Loading</h1>
      }
      {
        !isLoading && (
          <>
            <img className="bg-image" src={selectedImage.urls.regular} alt="" /> 
            <ImageView image={selectedImage} />
            <ImageSlider images={initialImages} onClickImage={handleClickImage} activeId={selectedId} />
          </>   
        )
      }
    </main>
  )
}

export default App;