import styled from "styled-components";

const InputStyle = styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    background: var(--grey-2);
    border: var(--grey-0);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 100%;
      background: var(--grey-2);
      border: var(--grey-0);
      border-radius: 4px;
      padding: 0 16px;
      font-size: 16px;
      outline: none;
      color: var(--grey-0);

      &:focus {
        border: 1px solid white;
      }

      &:disabled {
        color: var(--grey-3);
      }
    }

    span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      color: white;
      font-size: 20px;
      cursor: pointer;
      right: 20px;
    }
`
export default InputStyle;