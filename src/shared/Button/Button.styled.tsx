import styled from 'styled-components';
import { device } from '../../styles/media-query.styles';

const StyledButton = styled.button`
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    border: none;
    background-color: '#333';
    transition: 0.2s all;
    background-color: transparent;
    border: 1px solid black;
    max-width: 250px;

    @media ${device.tablet} {
        max-width: 100%;
    }

    &:hover,
    &:focus {
        transform: scale(1.02);
        cursor: pointer;
        background-color: '#ededed';
    }

    &:active {
        transform: scale(0.95);
    }
`;

export default StyledButton;
