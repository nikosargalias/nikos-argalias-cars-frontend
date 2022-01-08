import React from 'react';
import StyledLoader from './Loading.styled';

const Loading = ({ message }: { message: string }) => {
    return (
        <div>
            <h2>{message}</h2>
            <StyledLoader></StyledLoader>;
        </div>
    );
};

export default Loading;
