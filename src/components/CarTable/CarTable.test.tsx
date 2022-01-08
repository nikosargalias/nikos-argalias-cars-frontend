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

test('should remove car from list', async () => {
    render(<CarTable />, { wrapper: CarContextProvider });

    const AudiElement = await screen.findByText('Audi');
    expect(AudiElement).toBeInTheDocument();

    // get Audi remove button
    const removeButttons = await screen.findAllByRole('button', {
        name: 'Remove Car',
    });
    const AudiRemoveButton = removeButttons[0];
    expect(AudiRemoveButton).toBeInTheDocument();

    // click Audi remove button
    userEvent.click(AudiRemoveButton);

    // expect Audi element to have been removed
    const AudiElementAgain = screen.queryByText('Audi');
    expect(AudiElementAgain).not.toBeInTheDocument();
});
