import Fancybox from "../FancyBox"
import styled from 'styled-components';

const CarrouselContainer = styled.div`
margin: 50px 0;
  width: 100vw;
  background-color: white;
  text-align: center;
`

const Carrousel = () => {
  return (
    <CarrouselContainer>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
          <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
          <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
          <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
          <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
          <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
        </a>
      </Fancybox>
    </CarrouselContainer>
  )
}

export default Carrousel