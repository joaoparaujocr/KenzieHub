import styled from "styled-components";

const Loading = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100%;

  .blur {
    width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  filter: opacity(0.8);
  }

  span {
    position: absolute;
    box-sizing: border-box;
    width: 150px;
    height: 150px;
    border: 20px solid var(--grey-2);
    border-top: solid 20px var(--color-primary);
    border-radius: 50%;
    display: block;
  }
`

export default Loading;