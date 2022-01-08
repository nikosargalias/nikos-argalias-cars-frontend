import styled from 'styled-components';

const StyledLoader = styled.div`
    border: 0.5rem solid #f3f3f3;
    border-top: 0.5rem solid #3498db;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default StyledLoader;
