import { renderHook, act } from '@testing-library/react-hooks';
import React, { useContext } from 'react';
import CarContextProvider, { CarsContext } from './carsContext';

jest.mock('../../utils/fetchCars.ts');

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
    const { result, waitForNextUpdate } = renderHook(
        () => useContext(CarsContext),
        {
            wrapper,
        }
    );

    // set initial set of cars
    act(() => {
        result.current.actions.initCars(carData);
    });

    await waitForNextUpdate();

    expect(result.current.cars).toEqual(carData);
});

test('should add car to carsToDisplay', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CarContextProvider>{children}</CarContextProvider>
    );
    const { result } = renderHook(() => useContext(CarsContext), {
        wrapper,
    });

    // init car Data
    act(() => {
        result.current.actions.initCars([carData[1]]);
    });

    // Add car to Context
    act(() => {
        result.current.actions.addCar(carData[0]);
    });

    expect(result.current.carsToDisplay).toEqual(carData);
});

test('should add then remove car from carsToDisplay', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CarContextProvider>{children}</CarContextProvider>
    );
    const { result } = renderHook(() => useContext(CarsContext), {
        wrapper,
    });

    // init car Data
    act(() => {
        result.current.actions.initCars(carData);
    });

    expect(result.current.cars).toEqual(carData);

    // Add car to Context
    act(() => {
        result.current.actions.removeCar(carData[1].objectId);
    });

    expect(result.current.carsToDisplay).toEqual([carData[0]]);
});
