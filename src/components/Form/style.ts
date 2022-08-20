import styled from "styled-components";

const FormStyle = styled.div`
  background-color: var(--grey-3);
    text-align: center;
    padding: 42px 22px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h3 {
      color: white;
      font-size: var(--grey-0);
    }

    p {
      color: var(--grey-1);
      font-size: 12px;
      margin: 20px 0;
    }

    form {
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      label {
        color: var(--grey-0);
        font-weight: 400;
        font-size: 12.182px;
        text-align: left;
        margin-bottom: 5px;
      }

      button {
        width: 100%;
        padding: 10px 2%;
        background-color: var(--color-primary);
        border-radius: 4px;
        color: white;
        margin-top: 10px;
        border: none;
        font-size: 16px;
        cursor: pointer;
      }

      > span {
        margin: 4px 0 10px 0;
        color: #E83F5B;
      }
    }

    a {
      text-align: center;
      color: white;
      text-decoration: none;
      margin-top: 20px;
      display: inline-block;

      &:hover {
        text-decoration: underline;
      }
    }
`

export default FormStyle;