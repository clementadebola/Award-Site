import styled, { css } from 'styled-components';


const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  ${props => props.primary && css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.light};
    
    &:hover {
      background: ${props.theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
    }
  `}
  
  ${props => props.secondary && css`
    background: ${props.theme.colors.secondary};
    color: ${props.theme.colors.dark};
    
    &:hover {
      background: #f8cc00;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(255, 215, 0, 0.2);
    }
  `}
  
  ${props => props.outlined && css`
    background: transparent;
    color: ${props.theme.colors.primary};
    border: 2px solid ${props.theme.colors.primary};
    
    &:hover {
      background: rgba(108, 99, 255, 0.1);
      transform: translateY(-2px);
    }
  `}
`;
