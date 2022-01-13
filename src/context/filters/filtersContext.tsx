import React, { createContext, useReducer } from 'react';
import { setMake, setSort } from './filters.actions';
import filterReducer from './filters.reducer';
import { actions, filterState } from './filters.types';

const FiltersContext = createContext(
    {} as {
        filters: filterState;
        actions: actions;
    }
);

const initialReducerState = {
    sort: '',
    make: '',
};

const FiltersContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filters, dispatch] = useReducer(
        filterReducer,
        initialReducerState as filterState
    );

    const actions: actions = {
        setMake: (make) => dispatch(setMake(make)),
        setSort: (sort) => dispatch(setSort(sort)),
    };

    return (
        <FiltersContext.Provider value={{ filters, actions }}>
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;
export { FiltersContext };
