import React, { useCallback, useContext, useMemo, useState } from 'react';
import StyledForm from '../../../shared/Form/Form.styled';
import StyledButton from '../../../shared/Button/Button.styled';
import { v4 as uuidv4 } from 'uuid';
import { CarsContext } from '../../../context/cars/carsContext';
import { fetchPhoneticWords } from '../../../utils/fetchPhoneticWords';

const AddCar = () => {
    const [carModel, setCarModel] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carColour, setCarColour] = useState('');
    const {
        actions: { addCar },
    } = useContext(CarsContext);

    const carMakeId = useMemo(() => uuidv4(), []);
    const carModelId = useMemo(() => uuidv4(), []);
    const carYearId = useMemo(() => uuidv4(), []);
    const carCategoryId = useMemo(() => uuidv4(), []);

    const handleAddCar = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const phoneticWordData = await fetchPhoneticWords(carModel);
            const car = {
                objectId: uuidv4(),
                Year: new Date(carYear).getFullYear(),
                Make: carMake,
                Model: carModel,
                Colour: carColour,
                phonetic: phoneticWordData[0].word,
            };
            addCar(car);
            setCarModel('');
            setCarMake('');
            setCarYear('');
            setCarColour('');
        },
        [addCar, carColour, carModel, carMake, carYear]
    );

    const currentYear = useMemo(() => new Date().getFullYear(), []);

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
                    id={carYearId}
                    value={carYear}
                    onChange={(e) => setCarYear(e.target.value)}
                    data-testid='date-picker'
                    type='number'
                    min='1990'
                    max={`${currentYear}`}
                    title={`Must be a year from 1990 to ${currentYear}`}
                />
            </div>
            <div className='grp'>
                <label htmlFor={carCategoryId}>Car Colour</label>
                <input
                    type='text'
                    id={carCategoryId}
                    value={carColour}
                    onChange={(e) => setCarColour(e.target.value)}
                />
            </div>
            <StyledButton>Add car</StyledButton>
        </StyledForm>
    );
};

export default AddCar;
