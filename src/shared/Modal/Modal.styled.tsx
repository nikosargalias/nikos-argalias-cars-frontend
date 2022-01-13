import styled from 'styled-components';
// import { device } from '../../../styles/media-query.styles';

const StyledModal = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .modal {
        background: #e5e5e5;
        max-width: 90%;
        width: 500px;
        max-height: 90vh;
        height: 400px;
        border-radius: 20px;
        padding: 2rem;
    }
`;

export default StyledModal;
