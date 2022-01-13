import React, { useCallback, useContext, useMemo } from 'react';
import { CarsContext } from '../../../context/cars/carsContext';
import { DropDown } from '../../DropDown/DropDown';
import { v4 as uuidv4 } from 'uuid';
import CustomStyledContainer from './FilterCar.styled';
import { FiltersContext } from '../../../context/filters/filtersContext';

const FilterCar = () => {
    const { cachedCars } = useContext(CarsContext);
    const { actions } = useContext(FiltersContext);
    const viewAllCars = useMemo(() => 'View all cars', []);

    const carOptions = useMemo(() => {
        /**The following code neds to convert the array into a set in order to remove duplicates, then convert it back into the data structure the Dropdown component expects */
        const carMakes = cachedCars.map(({ make }) => make);
        carMakes.unshift(viewAllCars);
        const carOptions = Array.from(new Set(carMakes)).map((option) => ({
            label: option,
        }));

        return carOptions;
    }, [cachedCars, viewAllCars]);

    const sortOptions = useMemo(
        () => [{ label: 'Make' }, { label: 'Date' }],
        []
    );

    const handleSetMakeFilter = useCallback(
        (carMake: string) => {
            if (carMake === viewAllCars) {
                actions.setMake('');
            } else {
                actions.setMake(carMake);
            }
        },
        [actions, viewAllCars]
    );

    const handleSetSortFilter = useCallback(
        (filter) => {
            actions.setSort(filter.toLowerCase());
        },
        [actions]
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
                    onChange={handleSetMakeFilter}
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
