import { styled } from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import { Header } from "./components/Header"
import { Aside } from "./components/Aside"
import bannerImage from "./assets/banner.png"
import { Banner } from "./components/Banner"

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

export const App = () => (
  <GradientBackground>
    <GlobalStyles />
    <Header />
    <Aside />
    <Banner
      backgroundImage={bannerImage}
      text="A galeria mais completa de fotos do espaço!"
    />
  </GradientBackground>
)
