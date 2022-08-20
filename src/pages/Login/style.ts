import styled from "styled-components";

const ContainerMain = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 0 4%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: var(--color-primary);
    text-align: center;
    padding-bottom: 30px;
  }
`

export default ContainerMain;