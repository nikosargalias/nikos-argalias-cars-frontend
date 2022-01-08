import React from 'react';
import AddCar from '../AddCar/AddCar';
import FilterCar from '../FilterCar.tsx/FilterCar';
import StyledCarForm from './CarForm.styled';

const CarForm = () => {
    return (
        <StyledCarForm>
            <AddCar />
            <FilterCar />
        </StyledCarForm>
    );
};

export default CarForm;
