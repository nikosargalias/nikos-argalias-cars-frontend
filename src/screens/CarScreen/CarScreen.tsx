import React from 'react';
import CarTable from '../../components/CarTable/CarTable';
import CarForm from '../../components/Forms/CarForm/CarForm';
import Header from '../../shared/Header/Header';
import StyledCarScreen from './CarScreen.styled';

const CarScreen = () => {
    return (
        <StyledCarScreen>
            <Header title='Car App' />
            <CarForm />
            <CarTable />
        </StyledCarScreen>
    );
};

export default CarScreen;
