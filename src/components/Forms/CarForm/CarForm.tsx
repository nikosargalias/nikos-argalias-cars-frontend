import React from 'react';
import AddCar from '../AddCar/AddCar';
import StyledCarForm from './CarForm.styled';

const CarForm = () => {
    return (
        <StyledCarForm>
            <AddCar />
        </StyledCarForm>
    );
};

export default CarForm;
