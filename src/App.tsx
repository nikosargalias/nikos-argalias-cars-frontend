import React from 'react';
import CarContextProvider from './context/cars/carsContext';
import CarScreen from './screens/CarScreen/CarScreen';
import './styles/main.scss';

function App() {
    return (
        <div className='App'>
            <CarContextProvider>
                <CarScreen />
            </CarContextProvider>
        </div>
    );
}

export default App;
