import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    & > :not(:last-child) {
        margin-bottom: var(--gt-sm);
    }

    & .grp {
        & > :first-child {
            margin-right: var(--gt-sm);
        }
    }
`;

export default StyledForm;
