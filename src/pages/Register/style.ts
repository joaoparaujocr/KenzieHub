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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    h1 {
      color: var(--color-primary);
    }

    a {
      padding: 5px 15px;
      color: white;
      text-decoration: none;
      color: white;
      border-radius: 4px;
      background-color: var(--grey-3);
    }
  }

  select {
    position: relative;
    width: 100%;
    height: 48px;
    margin: 10px 0;
    background: var(--grey-2);
    border: var(--grey-0);
    border-radius: 4px;
    color: var(--grey-1);
    outline: none;
    padding: 0 16px;
    font-size: 16px;

    &:focus {
      border: 1px solid white;
    }
  }
`

export default ContainerMain;