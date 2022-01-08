import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CarsContext } from '../../context/cars/carsContext';
import Loading from '../Loading/Loading';
import StyledTable from './CarTable.styled';

const CarTable = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { carsToDisplay } = useContext(CarsContext);

    useEffect(() => {
        if (carsToDisplay.length > 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [carsToDisplay]);

    const CarComponents = useMemo(
        () =>
            carsToDisplay.map(({ objectId, Make, Model, Year }, i) => {
                return (
                    <tr key={i}>
                        <td>{Make}</td>
                        <td>{Model}</td>
                        <td>{Year}</td>
                    </tr>
                );
            }),
        [carsToDisplay]
    );

    return (
        <div>
            {!isLoading && <Loading message='Loading cars' />}
            <StyledTable>
                <thead>
                    <tr>
                        <td>Make</td>
                        <td>Model</td>
                        <td>Year</td>
                    </tr>
                </thead>
                <tbody>{CarComponents}</tbody>
            </StyledTable>
        </div>
    );
};

export default CarTable;
