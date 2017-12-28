import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  color: #fff;
  font-family: 'Roboto';
  background: ${props => props.color};
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background: ${props => props.hoverColor};
  }
`;

Button.defaultProps = {
  color: '#3f51b5',
  hoverColor: '#5c6bc0',
};

export default Button;
