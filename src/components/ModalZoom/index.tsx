import { styled } from "styled-components"
import { Image } from "../Gallery/image"
import { IconButton } from "../IconButton"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogStyled = styled.dialog`
  position: absolute;
  top: 15%;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  height: 740px;

  figure {
    width: 100%;
    height: 100%;
  }

  form {
    width: 0;
    button {
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0.5rem;
      border-radius: 50%;
      position: relative;
      top: 0;
      right: 50px;
    }
  }
`

export const ModalZoom = ({ photo, onclose }: any) => (
  <>
    {photo && (
      <Overlay>
        <DialogStyled open={!!photo} onClose={onclose}>
          <Image photo={photo} expanded={true} />
          <form method="dialog">
            <IconButton formMethod="dialog">
              <img src="/icones/fechar.png" alt="Ícone de fechar" />
            </IconButton>
          </form>
        </DialogStyled>
      </Overlay>
    )}
  </>
)
