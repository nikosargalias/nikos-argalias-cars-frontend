import styled from 'styled-components';
import StyledButton from '../../shared/Button/Button.styled';

export const StyledDropdown = styled.div`
    position: relative;
`;

type StyledButtonProps = {
    isExpanded: boolean;
};

export const StyledDropdownButton = styled(StyledButton)<StyledButtonProps>`
    position: relative;
    border: 1px solid #333;
    height: 100%;
    margin: 0;
    padding-right: 2rem;
    text-align: start;
    color: black;
    background-color: ${(props) =>
        props.isExpanded ? '#ededed' : 'transparent'};

    &::after {
        content: '^';
        font-size: 1rem;
        position: absolute;
        opacity: 0.5;
        top: 50%;
        right: 11px;
        transform: rotate(180deg) translateY(40%);
        width: 10px;
        height: 10px;
    }
`;

export const StyledSelect = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: auto;
    max-height: 300px;
    box-shadow: 1px 1px 100px #00000045;
`;

export const StyledOption = styled.li`
    list-style: none;
    background: white;
    color: black;
    padding: 0.7rem 0.5rem;
    margin: 0;

    border-left: 2px solid white !important;
    border-right: 2px solid white !important;
    border-top: 4px solid white !important;
    border-bottom: 4px solid white !important;

    &:not(:last-of-type) {
        border-bottom: 1px solid black;
    }

    &:hover {
        background-color: #deebfa !important;
        outline: none;
        cursor: pointer;
    }
    &:focus {
        outline: none;
        background-color: #106ebe !important;
        color: white;
        border-left: 2px solid white !important;
        border-right: 2px solid white !important;
        border-top: 4px solid white !important;
        border-bottom: 4px solid white !important;
    }
`;
