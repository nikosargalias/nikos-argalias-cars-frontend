import styled from 'styled-components';
import { device } from '../../../styles/media-query.styles';

const StyledCarForm = styled.div`
    & > :not(:last-child) {
        margin-bottom: var(--gt-lg);
    }

    @media ${device.tablet} {
        & > :not(:last-child) {
            margin-bottom: 0;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        background: var(--col-1);
    }
`;

export default StyledCarForm;
