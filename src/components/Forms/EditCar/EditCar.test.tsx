import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarContextProvider from '../../../context/cars/carsContext';
import EditCar from './EditCar';

jest.mock('../../../utils/localStorage.ts');

test('should render form correctly', async () => {
    render(
        <EditCar
            carId='1'
            handleEditCar={() => {}}
            handleCancelEditCar={() => {}}
        />,
        { wrapper: CarContextProvider }
    );

    const carMakeInput = screen.getByRole('textbox', {
        name: 'Car Make',
    });
    const carModelInput = screen.getByRole('textbox', { name: 'Car Model' });
    const carYearInput = screen.getByTestId('date-picker');
    const carColourInput = screen.getByRole('textbox', {
        name: 'Car Colour',
    });

    expect(carMakeInput).toBeInTheDocument();
    expect(carModelInput).toBeInTheDocument();
    expect(carYearInput).toBeInTheDocument();
    expect(carColourInput).toBeInTheDocument();

    // asserting button has rendered corerctly
    const submitButton = screen.getByRole('button', { name: 'Edit car' });
    expect(submitButton).toBeInTheDocument();
});

test('should fail to submit due to invalid Make input value', () => {
    const handleEditCar = jest.fn();
    render(
        <EditCar
            carId='1'
            handleEditCar={handleEditCar}
            handleCancelEditCar={() => {}}
        />,
        { wrapper: CarContextProvider }
    );

    const carMakeInput = screen.getByRole('textbox', {
        name: 'Car Make',
    });

    userEvent.clear(carMakeInput);
    userEvent.type(carMakeInput, 'Two words asd');
    expect(carMakeInput).toHaveValue('Two words asd');

    // submitting form
    const submitButton = screen.getByRole('button', { name: 'Edit car' });
    userEvent.click(submitButton);
    expect(handleEditCar).toHaveBeenCalledTimes(0);
});
test('should succeessfully submit form due to valid input values', () => {
    const handleEditCar = jest.fn();
    render(
        <EditCar
            carId='1'
            handleEditCar={handleEditCar}
            handleCancelEditCar={() => {}}
        />,
        { wrapper: CarContextProvider }
    );

    const carMakeInput = screen.getByRole('textbox', {
        name: 'Car Make',
    });

    userEvent.clear(carMakeInput);
    userEvent.type(carMakeInput, 'Audi');
    expect(carMakeInput).toHaveValue('Audi');

    const carModelInput = screen.getByRole('textbox', { name: 'Car Model' });
    userEvent.clear(carModelInput);
    userEvent.type(carModelInput, 'A3');
    expect(carModelInput).toHaveValue('A3');

    const carYearInput = screen.getByTestId('date-picker');
    userEvent.clear(carYearInput);
    userEvent.type(carYearInput, '2017');
    expect(carYearInput).toHaveValue(2017);

    const carColourInput = screen.getByRole('textbox', {
        name: 'Car Colour',
    });
    userEvent.clear(carColourInput);
    userEvent.type(carColourInput, 'Blue');
    expect(carColourInput).toHaveValue('Blue');

    // submitting form
    const submitButton = screen.getByRole('button', { name: 'Edit car' });
    userEvent.click(submitButton);
    expect(handleEditCar).toHaveBeenCalledTimes(0);
});
