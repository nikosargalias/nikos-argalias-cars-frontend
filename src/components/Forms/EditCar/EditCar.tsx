import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { CarsContext } from '../../../context/cars/carsContext';
import { selectCarById } from '../../../context/cars/carsSelectors';
import StyledButton from '../../../shared/Button/Button.styled';
import StyledForm from '../../../shared/Form/Form.styled';
import { CarType } from '../../../types/CarsType';
import { generateRandomId } from '../../../utils/generateRandomId';

type EditCarProps = {
    carId: string;
    handleEditCar: (car: CarType) => void;
    handleCancelEditCar: () => void;
};

const EditCar = ({
    carId,
    handleEditCar,
    handleCancelEditCar,
}: EditCarProps) => {
    const { carsToDisplay } = useContext(CarsContext);
    const car = selectCarById(carsToDisplay, carId) as CarType;

    const [model, setCarModel] = useState('');
    const [make, setCarMake] = useState('');
    const [year, setCarYear] = useState('');
    const [colour, setCarColour] = useState('');

    useEffect(() => {
        setCarModel(car.model);
        setCarMake(car.make);
        setCarYear(car.year);
        setCarColour(car.colour);
    }, [car]);

    const makeId = useMemo(() => generateRandomId(), []);
    const modelId = useMemo(() => generateRandomId(), []);
    const yearId = useMemo(() => generateRandomId(), []);
    const carColourId = useMemo(() => generateRandomId(), []);

    const currentYear = useMemo(() => new Date().getFullYear(), []);

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const updatedCar = { ...car, make, model, year, colour };
            handleEditCar(updatedCar);
        },
        [car, make, model, year, colour, handleEditCar]
    );

    return (
        <StyledForm onSubmit={onSubmit}>
            <div className='grp'>
                <label htmlFor={makeId}>Car Make</label>
                <input
                    type='text'
                    id={makeId}
                    value={make}
                    onChange={(e) => setCarMake(e.target.value)}
                    pattern='^[a-zA-Z]+$'
                />
            </div>
            <div className='grp'>
                <label htmlFor={modelId}>Car Model</label>
                <input
                    type='text'
                    id={modelId}
                    value={model}
                    onChange={(e) => setCarModel(e.target.value)}
                    pattern='[A-Za-z0-9]*'
                />
            </div>
            <div className='grp'>
                <label htmlFor={yearId}>Car Year</label>
                <input
                    id={yearId}
                    value={year}
                    onChange={(e) => setCarYear(e.target.value)}
                    data-testid='date-picker'
                    type='number'
                    min='1990'
                    max={`${currentYear}`}
                    title={`Must be a year from 1990 to ${currentYear}`}
                />
            </div>
            <div className='grp'>
                <label htmlFor={carColourId}>Car Colour</label>
                <input
                    type='text'
                    id={carColourId}
                    value={colour}
                    onChange={(e) => setCarColour(e.target.value)}
                    pattern='[a-zA-Z]*\s?[a-zA-Z]*'
                />
            </div>
            <div className='grp space-between'>
                <StyledButton>Edit car</StyledButton>
                <StyledButton type='button' onClick={handleCancelEditCar}>
                    Cancel
                </StyledButton>
            </div>
        </StyledForm>
    );
};

export default EditCar;
