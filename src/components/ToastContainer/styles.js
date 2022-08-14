import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 10;
  padding: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export default Container