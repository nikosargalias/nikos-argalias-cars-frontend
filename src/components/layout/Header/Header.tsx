import React from 'react';
import styled from 'styled-components';

const Header = ({ title }: { title: string }) => {
    return (
        <StyledHeader>
            <h1>{title}</h1>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    text-align: center;
`;

export default Header;
