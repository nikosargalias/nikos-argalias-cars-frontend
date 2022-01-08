import { renderHook, act } from '@testing-library/react-hooks';
import React, { useContext } from 'react';
import CarContextProvider, { CarsContext } from './carsContext';

jest.mock('../../utils/fetchCars.ts');

const useCarsContext = () => {
    const { cars, actions, carsToDisplay } = useContext(CarsContext);
    return { cars, actions, carsToDisplay };
};

const carData = [
    {
        objectId: '1',
        Year: 2020,
        Make: 'Audi',
        Model: 'A3',
        Category: 'Hatchback',
        createdAt: '0',
        updatedAt: '0',
    },
    {
        objectId: '2',
        Year: 2020,
        Make: 'Mercedes',
        Model: 'A200',
        Category: 'Hatchback',
        createdAt: '0',
        updatedAt: '0',
    },
];

test('should set initial cars context', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CarContextProvider>{children}</CarContextProvider>
    );
    const { result } = renderHook(() => useCarsContext(), {
        wrapper,
    });

    // set initial set of cars
    act(() => {
        result.current.actions.initCars(carData);
    });

    expect(result.current.cars).toEqual(carData);
});
