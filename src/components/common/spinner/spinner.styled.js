import styled, {css, keyframes} from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 30px;

  ${({homePage}) => homePage && css`
    grid-column: 1 / 4;

    @media (max-width: 860px) {
      grid-column: 1 / 3;
    }
  `}

  ${({questPage}) => questPage && css`
    height: 100vh;
    margin: 0;
  `}
`;

const Wave = styled.div`
  width: 5px;
  height: 100px;
  background: linear-gradient(45deg, ${({theme}) => theme.color.tangerine}, #fff);
  margin: 10px;
  animation: ${waveAnimation} 1s linear infinite;
  border-radius: 20px;

  &:nth-child(10) {
    animation-delay: 0.1s;
  }
  &:nth-child(9) {
    animation-delay: 0.2s;
  }
  &:nth-child(8) {
    animation-delay: 0.3s;
  }
  &:nth-child(7) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.7s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
  &:nth-child(2) {
    animation-delay: 0.9s;
  }
`;

export {Center, Wave};
