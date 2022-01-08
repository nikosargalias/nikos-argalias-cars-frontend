import React, { useCallback, useContext, useMemo } from 'react';
import { fetchCars } from '../../../utils/fetchCars';
import { CarsContext } from '../../../context/cars/carsContext';
import { DropDown } from '../../DropDown/DropDown';
import { v4 as uuidv4 } from 'uuid';
import CustomStyledContainer from './FilterCar.styled';
import { FiltersContext } from '../../../context/filters/filtersContext';

const FilterCar = () => {
    const {
        cars,
        actions: { setCars },
    } = useContext(CarsContext);

    const { setFilter } = useContext(FiltersContext);

    const carOptions = useMemo(() => {
        /**The following code neds to conver the array into a set in order to remove duplicates, then convert it back into the data structure the Dropdown component expects */
        const carMakes = cars.map(({ Make }) => Make);
        carMakes.unshift('View All Cars');
        const carOptions = Array.from(new Set(carMakes)).map((option) => ({
            label: option,
        }));

        return carOptions;
    }, [cars]);

    const sortOptions = useMemo(
        () => [{ label: 'Make' }, { label: 'Date' }],
        []
    );

    const handleSelectCar = useCallback(
        async (carMake: string) => {
            const carIndex = cars.findIndex((car) => car.Make === carMake);

            if (carIndex > -1) {
                const filteredCars = await fetchCars(carMake);
                setCars(filteredCars);
            } else {
                setCars(cars);
            }
        },
        [cars, setCars]
    );

    const handleSetSortFilter = useCallback(
        (filter) => {
            setFilter(filter.toLowerCase());
        },
        [setFilter]
    );

    const filterLabelId = useMemo(() => uuidv4(), []);
    const sortLabelId = useMemo(() => uuidv4(), []);

    return (
        <CustomStyledContainer>
            <div>
                <label htmlFor={filterLabelId}>Filter car list by make</label>
                <DropDown
                    message='Filter by car make'
                    options={carOptions}
                    id={filterLabelId}
                    onChange={handleSelectCar}
                />
            </div>
            <div>
                <label htmlFor={sortLabelId}>Sort car list</label>
                <DropDown
                    message='Sort by'
                    options={sortOptions}
                    id={sortLabelId}
                    onChange={handleSetSortFilter}
                />
            </div>
        </CustomStyledContainer>
    );
};

export default FilterCar;
