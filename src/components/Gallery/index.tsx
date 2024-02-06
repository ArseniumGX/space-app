import { styled } from "styled-components"
import { Title } from "../Title"
import { Popular } from "./Popular"
import { Tags } from "./Tags"
import { Image } from "./image"

type PropsComponent = {
  photos: {
    titulo: string
    fonte: string
    path: string
    id: string
    tagId: number
  }[]
  onPhotoSelected: (any: any) => void
}

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

export const Gallery = ({ photos = [], onPhotoSelected }: PropsComponent) => (
  <>
    <Tags />
    <GalleryContainer>
      <FluidSection>
        <Title>Navegue pela Galeria</Title>
        <ImageContainer>
          {photos.map((photo) => (
            <Image
              key={photo.id}
              photo={photo}
              onZoomClicked={onPhotoSelected}
            />
          ))}
        </ImageContainer>
      </FluidSection>
      <Popular></Popular>
    </GalleryContainer>
  </>
)
