import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  max-width: 100%;
  width: 360px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  padding: 4px;

  border-bottom: 1px solid #d3d5e3;
  color: '#9e0202';
  text-shadow: 1px 1px 1px #fff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size:  28px;

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 3px;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
  }


  :first-child {
    border-bottom-left-radius: 0.5rem;
  }

  :last-child {
    border-bottom-right-radius: 0.5rem;
  }

  background-color: ${props => getRandomHexColor(props.index)}
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;
