import { createContext } from 'react';

import { CarsContextState } from './cars.types';

const CarsContext = createContext({} as CarsContextState);

export { CarsContext };
