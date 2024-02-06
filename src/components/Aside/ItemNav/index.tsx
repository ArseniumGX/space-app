import { ReactNode } from "react"
import { styled } from "styled-components"

type PropsComponent = {
  children: ReactNode
  iconActive: string
  iconInactive: string
  active?: boolean
}

const ItemNavStyled = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7b78e5" : "#d9d9d9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  column-gap: 22px;
`

export const ItemNav = ({
  children,
  iconActive,
  iconInactive,
  active = false,
}: Readonly<PropsComponent>) => (
  <ItemNavStyled $active={active}>
    <img src={active ? iconActive : iconInactive} alt="Icone" />
    {children}
  </ItemNavStyled>
)
