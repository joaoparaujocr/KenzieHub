import styled, { css, FlattenSimpleInterpolation, keyframes } from "styled-components";

interface IContainerProps {
  isLeave: boolean;
  type: string;
}

const translateXAnimationFrom = keyframes`
0% {
  background: transparent;
  transform: translateX(120%);
}

92% { transform: translateX(-20px) }

100% { transform: translateX(0); }

`;

const translateXAnimationLeave = keyframes`
  0% { transform: translateX(0) }
  100% { transform: translateX(120%) }
`;

const mobileYAnimationFrom = keyframes`
0% {
  background: transparent;
  transform: translateY(-120%);
}

100% { transform: translateY(0); }

`;

const mobileYAnimationLeave = keyframes`
  0% { transform: translateY(0) }
  100% { transform: translateY(-120%) }
`;

const typeToast: { [key: string]: FlattenSimpleInterpolation } = {
  success: css`background: #57e34f;`,
  error: css`background: #d11d35;`,
  warning: css`background: #cbd11d;`
}

const Container = styled.div<IContainerProps>`
  width: 320px;
  display: flex;
  position: relative;
  padding: 16px 16px 16px 16px;
  margin: 20px 22px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${({ isLeave }) => isLeave ? translateXAnimationLeave : translateXAnimationFrom} .8s;
  animation-fill-mode: forwards;

  ${({ type }) => typeToast[type]}

  .infos {
    display: flex;
    padding-left: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      font-size: 16px;
    }
  }

  button {
    position: absolute;
    top: 14px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 10px auto;
    ${({ isLeave }) =>
      css`
        animation: ${isLeave
            ? mobileYAnimationLeave
            : mobileYAnimationFrom}
          0.8s;
      `}
  }
`

export default Container;