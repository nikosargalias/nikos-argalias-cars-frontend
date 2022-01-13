import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CarsContext } from '../../context/cars/carsContext';
import Loading from '../../shared/Loading/Loading';
import Button from '../../shared/Button/Button';
import { FiltersContext } from '../../context/filters/filtersContext';
import { selectCarsByFilters } from '../../context/cars/carsSelectors';
import StyledTable from './CarTable.styled';

const CarTable = ({ onEdit }: { onEdit: (id: string) => void }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        carsToDisplay,
        actions: { removeCar },
    } = useContext(CarsContext);

    const { filters } = useContext(FiltersContext);

    useEffect(() => {
        if (carsToDisplay.length > 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [carsToDisplay]);

    const CarComponents = useMemo(() => {
        let filteredCars = filters
            ? selectCarsByFilters(carsToDisplay, filters)
            : carsToDisplay;

        return filteredCars.map(
            ({ id, make, model, year, phonetic, colour }, i) => {
                return (
                    <tr key={i}>
                        <td>{make}</td>
                        <td>{model}</td>
                        <td>{year}</td>
                        <td>{colour}</td>
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
                                    removeCar(id);
                                }}
                            >
                                Remove Car
                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={() => {
                                    onEdit(id);
                                }}
                            >
                                Edit
                            </Button>
                        </td>
                    </tr>
                );
            }
        );
    }, [carsToDisplay, removeCar, filters, onEdit]);

    return (
        <div>
            {!isLoading && <p>Please Add a car</p>}
            {isLoading && (
                <StyledTable>
                    <thead>
                        <tr>
                            <td>Make</td>
                            <td>Model</td>
                            <td>Year</td>
                            <td>Colour</td>
                            <td>Phonetic words</td>
                            <td>Remove Car</td>
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>{CarComponents}</tbody>
                </StyledTable>
            )}
        </div>
    );
};

export default CarTable;
