import { createGlobalStyle } from "styled-components";

const ModalGlobal = createGlobalStyle`
  .Modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    padding: 0 4%;
    width: 100%;
}

.Modal > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px 20px;
    background-color: var(--grey-2);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px 4px 0 0;
    color: white;
}


.Modal > div > button {
    background: none;
    border: none;
    color: var(--grey-1);
    font-size: 20px;
    cursor: pointer;
}

.Modal > form {
    background-color: var(--grey-3);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 14px 20px;
    border-radius: 0 0 4px 4px;
}

.Modal > form label { margin: 10px 0; }

.Modal > form > select {
    position: relative;
    width: 100%;
    height: 48px;
    margin-bottom: 30px;
    background: var(--grey-2);
    border: var(--grey-0);
    border-radius: 4px;
    color: var(--grey-1);
    outline: none;
    padding: 0 16px;
    font-size: 16px;
}

.Modal > form > button {
    color: white;
    border: none;
    border-radius: 4px;
    background-color: var(--color-primary);
    font-size: 16px;
    padding: 12px 16px;
    cursor: pointer;
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.512)
}
`

export default ModalGlobal;
