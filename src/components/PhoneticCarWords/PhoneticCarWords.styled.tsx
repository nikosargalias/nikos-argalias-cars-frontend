import styled from 'styled-components';
import { device } from '../../styles/media-query.styles';

const PhoneticList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    h3 {
        margin-bottom: var(--gt-sm);
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;

        & li:not(:last-of-type) {
            margin-right: var(--gt-md);
        }
    }

    @media ${device.tablet} {
        align-items: center;

        ul {
            justify-content: center;
        }
    }
`;

export default PhoneticList;
