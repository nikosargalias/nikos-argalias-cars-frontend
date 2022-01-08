import styled from 'styled-components';
import StyledContainer from '../../../shared/Container/Container.styled';
import { device } from '../../../styles/media-query.styles';

const CustomStyledContainer = styled(StyledContainer)`
    display: flex;
    justify-content: flex-start;

    label {
        /* hidden because label is for screen reader purposes only, recommended sr-only srtled by webaim */
        position: absolute;
        left: -1000%;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    & > div:not(:last-of-type) {
        margin-bottom: var(--gt-sm);
    }

    @media ${device.tablet} {
        align-items: center;
        margin-bottom: 0;

        & > div:not(:last-of-type) {
            margin: 0;
            margin-right: var(--gt-sm);
        }
    }
`;

export default CustomStyledContainer;
