import { styled } from "styled-components"
import search from "../../assets/search.png"

const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`
const TextFieldStyled = styled.input`
  height: 56px;
  padding: 12px 50px 12px 16px;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;
`

const IconSearch = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

export const TextField = (props: any) => (
  <ContainerStyled>
    <TextFieldStyled placeholder="O que você procura ?" {...props} />
    <IconSearch src={search} alt="Ícone da lupa" />
  </ContainerStyled>
)
