import { styled } from "styled-components"
import photos from "./fotos.json"
import { GlobalStyles } from "./components/GlobalStyles"
import { Header } from "./components/Header"
import { Aside } from "./components/Aside"
import bannerImage from "./assets/banner.png"
import { Banner } from "./components/Banner"
import { Gallery } from "./components/Gallery"
import { useState } from "react"

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContentGalley = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const App = () => {
  const [photosGallery, setPhotosGallery] = useState(photos)

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <ContentGalley>
            <Banner
              backgroundImage={bannerImage}
              text="A galeria mais completa de fotos do espaço!"
            />
            <Gallery photos={photosGallery} />
          </ContentGalley>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  )
}
