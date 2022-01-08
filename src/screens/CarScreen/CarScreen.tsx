import React from 'react';
import CarTable from '../../components/CarTable/CarTable';
import CarForm from '../../components/Forms/CarForm/CarForm';
import PhoneticCarWords from '../../components/PhoneticCarWords/PhoneticCarWords';
import StyledCarScreen from './CarScreen.styled';

const CarScreen = () => {
    return (
        <StyledCarScreen>
            <PhoneticCarWords />
            <CarForm />
            <CarTable />
        </StyledCarScreen>
    );
};

export default CarScreen;
