import styled from 'styled-components';
import {Link as RouterLink} from '../common';

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Message = styled.p`
  font-size: 2rem;
`;

const Link = styled(RouterLink)`
  display: block;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteSmoke};

  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
    border-bottom: 1px solid ${({ theme }) => theme.color.tangerine};
  }
`;

export {Layer, Message, Link};
