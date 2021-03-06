import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarContextProvider from '../../context/cars/carsContext';
import CarTable from './CarTable';

jest.mock('../../utils/localStorage.ts');

test('should render cars table with default data', async () => {
    // Mocked the API so returns hard coded data (see src/utils/__mocks__/fetchCars.ts)
    render(<CarTable onEdit={() => {}} />, { wrapper: CarContextProvider });

    const AudiElement = await screen.findByText('Audi');
    expect(AudiElement).toBeInTheDocument();
});

test('should remove car from list', async () => {
    render(<CarTable onEdit={() => {}} />, { wrapper: CarContextProvider });

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
