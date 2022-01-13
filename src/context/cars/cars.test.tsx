import { renderHook, act } from '@testing-library/react-hooks';
import React, { useContext } from 'react';
import CarContextProvider, { CarsContext } from './carsContext';

jest.mock('../../utils/fetchPhoneticWords');

const carData = [
    {
        id: '1',
        year: '2020',
        make: 'Audi',
        model: 'A3',
        colour: '',
        phonetic: 'foo',
    },
    {
        id: '2',
        year: '2020',
        make: 'Mercedes',
        model: 'A200',
        colour: '',
        phonetic: 'foo',
    },
];

test('should set initial cars context', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CarContextProvider>{children}</CarContextProvider>
    );
    const { result } = renderHook(() => useContext(CarsContext), {
        wrapper,
    });

    // set initial set of cars
    act(() => {
        result.current.actions.initCars(carData);
    });

    expect(result.current.cachedCars).toEqual(carData);
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

    expect(result.current.cachedCars).toEqual(carData);

    // Add car to Context
    act(() => {
        result.current.actions.removeCar(carData[1].id);
    });

    expect(result.current.carsToDisplay).toEqual([carData[0]]);
});
