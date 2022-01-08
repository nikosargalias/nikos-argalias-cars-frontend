import React from 'react';
import CarTable from '../../components/CarTable/CarTable';
import CarForm from '../../components/Forms/CarForm/CarForm';
import StyledCarScreen from './CarScreen.styled';

const CarScreen = () => {
    return (
        <StyledCarScreen>
            <CarForm />
            <CarTable />
        </StyledCarScreen>
    );
};

export default CarScreen;
