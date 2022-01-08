import React from 'react';
import CarTable from '../../components/CarTable/CarTable';
import StyledCarScreen from './CarScreen.styled';

const CarScreen = () => {
    return (
        <StyledCarScreen>
            <CarTable />
        </StyledCarScreen>
    );
};

export default CarScreen;
