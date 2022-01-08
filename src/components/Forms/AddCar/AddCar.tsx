import React, { useCallback, useContext, useMemo, useState } from 'react';
import StyledForm from '../../../shared/Form/Form.styled';
import StyledButton from '../../../shared/Button/Button.styled';
import { v4 as uuidv4 } from 'uuid';
import { CarsContext } from '../../../context/cars/carsContext';

const AddCar = ({ onChange, options }: any) => {
    const [carModel, setCarModel] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carCategory, setCarCategory] = useState('');
    const {
        actions: { addCar },
    } = useContext(CarsContext);

    const carMakeId = useMemo(() => uuidv4(), []);
    const carModelId = useMemo(() => uuidv4(), []);
    const carYearId = useMemo(() => uuidv4(), []);
    const carCategoryId = useMemo(() => uuidv4(), []);

    const handleAddCar = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const car = {
                objectId: uuidv4(),
                Year: new Date(carYear).getFullYear(),
                Make: carMake,
                Model: carModel,
                Category: carCategory,
                createdAt: new Date().getTime().toString(),
                updatedAt: new Date().getTime().toString(),
            };
            addCar(car);
            setCarModel('');
            setCarMake('');
            setCarYear('');
            setCarCategory('');
        },
        [addCar, carCategory, carModel, carMake, carYear]
    );

    return (
        <StyledForm onSubmit={(e) => handleAddCar(e)}>
            <div className='grp'>
                <label htmlFor={carMakeId}>Car Make</label>
                <input
                    type='text'
                    id={carMakeId}
                    value={carMake}
                    onChange={(e) => setCarMake(e.target.value)}
                />
            </div>
            <div className='grp'>
                <label htmlFor={carModelId}>Car Model</label>
                <input
                    type='text'
                    id={carModelId}
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                />
            </div>
            <div className='grp'>
                <label htmlFor={carYearId}>Car Year</label>
                <input
                    type='date'
                    id={carYearId}
                    value={carYear}
                    onChange={(e) => setCarYear(e.target.value)}
                    data-testid='date-picker'
                />
            </div>
            <div className='grp'>
                <label htmlFor={carCategoryId}>Car Category</label>
                <input
                    type='text'
                    id={carCategoryId}
                    value={carCategory}
                    onChange={(e) => setCarCategory(e.target.value)}
                />
            </div>
            <StyledButton>Add car</StyledButton>
        </StyledForm>
    );
};

export default AddCar;
