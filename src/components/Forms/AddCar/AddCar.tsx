import React, { useCallback, useContext, useMemo, useState } from 'react';
import StyledForm from '../../../shared/Form/Form.styled';
import StyledButton from '../../../shared/Button/Button.styled';
import { CarsContext } from '../../../context/cars/carsContext';
import { fetchPhoneticWords } from '../../../utils/fetchPhoneticWords';
import { generateRandomId } from '../../../utils/generateRandomId';
import {
    carColourRegex,
    carMakeRegex,
    carModelRegex,
    carRegexValidation,
} from '../utils/carRegexValidation';

const AddCar = () => {
    const [carModel, setCarModel] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carColour, setCarColour] = useState('');
    const {
        actions: { addCar },
    } = useContext(CarsContext);

    const carMakeId = useMemo(() => generateRandomId(), []);
    const carModelId = useMemo(() => generateRandomId(), []);
    const carYearId = useMemo(() => generateRandomId(), []);
    const carCategoryId = useMemo(() => generateRandomId(), []);

    const handleAddCar = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (
                !carRegexValidation(carMake, carMakeRegex) ||
                !carRegexValidation(carModel, carModelRegex) ||
                !carRegexValidation(carColour, carColourRegex)
            )
                return;

            const phoneticWordData = await fetchPhoneticWords(carModel);
            const car = {
                id: generateRandomId(),
                year: new Date(carYear).getFullYear().toString(),
                make: carMake,
                model: carModel,
                colour: carColour,
                phonetic: phoneticWordData
                    .map((arr: any) => arr.word)
                    .join(', '),
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
                    pattern='^[a-zA-Z]+$'
                />
            </div>
            <div className='grp'>
                <label htmlFor={carModelId}>Car Model</label>
                <input
                    type='text'
                    id={carModelId}
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    pattern='[A-Za-z0-9]*'
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
                    min='1900'
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
                    pattern='[a-zA-Z]*\s?[a-zA-Z]*'
                />
            </div>
            <StyledButton>Add car</StyledButton>
        </StyledForm>
    );
};

export default AddCar;
