import React from 'react';
import AddCar from '../../Forms/AddCar/AddCar';
import FilterCar from '../../Forms/FilterCar.tsx/FilterCar';
import StyledCarForm from './FormContainer.styled';

const CarForm = () => {
    return (
        <StyledCarForm>
            <AddCar />
            <FilterCar />
        </StyledCarForm>
    );
};

export default CarForm;
