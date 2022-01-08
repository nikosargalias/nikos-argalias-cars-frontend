import styled from 'styled-components';
import { device } from '../../styles/media-query.styles';

type StyledContainerProps = {
    col?: boolean;
    jc?:
        | 'space-between'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-evenely';
    ai?: string;
};

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;
    flex-direction: flex-start;

    @media ${device.tablet} {
        display: flex;
        flex-direction: ${(props) => (props.col ? 'column' : 'row')};
        ${(props) => (props.jc ? `justify-content: ${props.jc};` : 'start')};
        align-items: ${(props) => props.ai};
        margin-bottom: var(--gt-md);
        background: var(--col-1);
    }
`;

export default StyledContainer;
