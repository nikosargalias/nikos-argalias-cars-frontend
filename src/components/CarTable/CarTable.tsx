import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CarsContext } from '../../context/cars/carsContext';
import Loading from '../../shared/Loading/Loading';
import Button from '../../shared/Button/Button';
import { FiltersContext } from '../../context/filters/filtersContext';
import { selectCarsBySorting } from '../../context/cars/carsSelectors';
import StyledTable from './CarTable.styled';

const CarTable = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        carsToDisplay,
        actions: { removeCar },
    } = useContext(CarsContext);

    const { filter } = useContext(FiltersContext);

    useEffect(() => {
        if (carsToDisplay.length > 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [carsToDisplay]);

    const CarComponents = useMemo(() => {
        let filteredCars = filter
            ? selectCarsBySorting(carsToDisplay, filter)
            : carsToDisplay;

        return filteredCars.map(
            ({ objectId, Make, Model, Year, phonetic }, i) => {
                return (
                    <tr key={i}>
                        <td>{Make}</td>
                        <td>{Model}</td>
                        <td>{Year}</td>
                        <td>
                            {phonetic ? (
                                phonetic
                            ) : (
                                <Loading message='Loading phonetic words' />
                            )}
                        </td>
                        <td>
                            <Button
                                onClick={() => {
                                    removeCar(objectId);
                                }}
                            >
                                Remove Car
                            </Button>
                        </td>
                    </tr>
                );
            }
        );
    }, [carsToDisplay, removeCar, filter]);

    return (
        <div>
            {!isLoading && <Loading message='Loading cars' />}
            {isLoading && (
                <StyledTable>
                    <thead>
                        <tr>
                            <td>Make</td>
                            <td>Model</td>
                            <td>Year</td>
                            <td>Phonetic words</td>
                            <td>Remove Car</td>
                        </tr>
                    </thead>
                    <tbody>{CarComponents}</tbody>
                </StyledTable>
            )}
        </div>
    );
};

export default CarTable;
