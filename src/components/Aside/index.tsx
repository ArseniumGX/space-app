import { styled } from "styled-components"
import { ItemNav } from "./ItemNav"

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`

export const Aside = () => (
  <aside>
    <nav>
      <ListStyled>
        <ItemNav
          iconActive="/icones/home-ativo.png"
          iconInactive="/icones/home-inativo.png"
          active={true}
        >
          Início
        </ItemNav>
        <ItemNav
          iconActive="/icones/mais-vistas-ativo.png"
          iconInactive="/icones/mais-vistas-inativo.png"
        >
          Mais Vistas
        </ItemNav>
        <ItemNav
          iconActive="/icones/mais-curtidas-ativo.png"
          iconInactive="/icones/mais-curtidas-inativo.png"
        >
          Mais Curtidas
        </ItemNav>
        <ItemNav
          iconActive="/icones/novas-ativo.png"
          iconInactive="/icones/novas-inativo.png"
        >
          Novas
        </ItemNav>
        <ItemNav
          iconActive="/icones/surpreenda-me-ativo.png"
          iconInactive="/icones/surpreenda-me-inativo.png"
        >
          Surpreenda-me
        </ItemNav>
      </ListStyled>
    </nav>
  </aside>
)
