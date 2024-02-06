import { styled } from "styled-components"
import { IconButton } from "../../IconButton"

type PropsComponent = {
  photo: {
    titulo: string
    fonte: string
    path: string
    id: string
    tagId: number
  }
  expanded?: boolean
}

const FigureStyled = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: "GandhiSansBold";
    }

    h4 {
      flex-grow: 1;
    }

    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Image = ({
  photo,
  expanded = false,
}: Readonly<PropsComponent>) => (
  <FigureStyled>
    <img src={photo.path} alt={`Foto ${photo.titulo}`} />
    <figcaption>
      <h3>{photo.titulo}</h3>
      <Footer>
        <h4>{photo.fonte}</h4>
        <IconButton>
          <img src="/icones/favorito.png" alt="Ícone de favorito" />
        </IconButton>
        {!expanded && (
          <IconButton aria-hidden={expanded}>
            <img src="/icones/expandir.png" alt="Ícone de expandir" />
          </IconButton>
        )}
      </Footer>
    </figcaption>
  </FigureStyled>
)
