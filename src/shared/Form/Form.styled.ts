import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    & > :not(:last-child) {
        margin-bottom: var(--gt-md);
    }

    & .grp {
        display: flex;
        justify-content: space-between;

        label {
            flex-basis: 30%;
            min-width: max-content;
        }
        input {
            flex-basis: 70%;
            padding: 0.2rem;
        }

        & > :first-child {
            margin-right: var(--gt-sm);
        }
    }
`;

export default StyledForm;
