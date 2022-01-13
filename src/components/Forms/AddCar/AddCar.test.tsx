import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarContextProvider from '../../../context/cars/carsContext';
import AddCar from './AddCar';

test('should render AddCar form correctly and ensure inputs are working', async () => {
    render(<AddCar />, { wrapper: CarContextProvider });

    // grabbing inputs and implicitely asserting they exist as getBy throws error if it doesn't find element
    const carMakeInput = screen.getByRole('textbox', { name: 'Car Make' });
    const carModelInput = screen.getByRole('textbox', { name: 'Car Model' });
    const carYearInput = screen.getByTestId('date-picker');
    const carColourInput = screen.getByRole('textbox', {
        name: 'Car Colour',
    });

    // asserting inputs work correctly
    userEvent.type(carMakeInput, 'Merc');
    expect(carMakeInput).toHaveValue('Merc');
    userEvent.type(carModelInput, 'A200');
    expect(carModelInput).toHaveValue('A200');
    userEvent.type(carYearInput, '2022');
    expect(carYearInput).toHaveValue(2022);
    userEvent.type(carColourInput, 'Hatchback');
    expect(carColourInput).toHaveValue('Hatchback');

    // asserting button has rendered corerctly
    const submitButton = screen.getByRole('button', { name: 'Add car' });
    expect(submitButton).toBeInTheDocument();
});
