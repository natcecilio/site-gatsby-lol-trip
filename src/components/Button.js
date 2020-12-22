import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? '#161c1d': '#d0a85c')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #f0e6d2;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: 2px solid #d0a85c;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? "transparent" : "#d0a85c")};
    border: 1px solid #d0a85c;
    transform: translateY(-2px); 
  }
`