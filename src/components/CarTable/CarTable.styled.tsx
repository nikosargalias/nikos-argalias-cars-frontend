import styled from 'styled-components';

const StyledTable = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 3px solid purple;

    * {
        border: 1px solid black;
    }

    thead td {
        font-size: 1.2rem;
        font-weight: 700;
    }

    thead tr,
    tr:not(:last-of-type) {
        border-bottom: 2px solid pink;
    }

    thead tr {
        width: 25%;
    }

    th,
    td {
        padding: 0.5rem;
    }
`;

export default StyledTable;
