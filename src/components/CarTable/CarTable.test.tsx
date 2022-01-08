import { render, screen } from '@testing-library/react';
import CarContextProvider from '../../context/cars/carsContext';
import CarTable from './CarTable';
import userEvent from '@testing-library/user-event';

jest.mock('../../utils/fetchCars.ts');

test('should render cars table with default data', async () => {
    render(<CarTable />, { wrapper: CarContextProvider });

    const AudiElement = await screen.findByText('Audi');
    expect(AudiElement).toBeInTheDocument();
});
