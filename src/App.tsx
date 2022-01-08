import React from 'react';
import CarContextProvider from './context/cars/carsContext';
import FiltersContextProvider from './context/filters/filtersContext';
import CarScreen from './screens/CarScreen/CarScreen';
import './styles/main.scss';

function App() {
    return (
        <div className='App'>
            <CarContextProvider>
                <FiltersContextProvider>
                    <CarScreen />
                </FiltersContextProvider>
            </CarContextProvider>
        </div>
    );
}

export default App;
