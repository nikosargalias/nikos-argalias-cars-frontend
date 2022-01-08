import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ onClick, children }: any) => {
    const handleOnClick = () => {
        onClick();
    };
    return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
};

export default Button;
