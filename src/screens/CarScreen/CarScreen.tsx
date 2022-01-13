import React, { useCallback, useContext, useState } from 'react';
import CarTable from '../../components/CarTable/CarTable';
import EditCar from '../../components/Forms/EditCar/EditCar';
import CarForm from '../../components/layout/FormContainer/FormContainer';
import Modal from '../../shared/Modal/Modal';
import { CarsContext } from '../../context/cars/carsContext';
import Header from '../../components/layout/Header/Header';
import { CarType } from '../../types/CarsType';
import StyledCarScreen from './CarScreen.styled';

const CarScreen = () => {
    const [editCarId, setEditCarId] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const { actions } = useContext(CarsContext);
    const onEditCar = useCallback((carId: string) => {
        setEditCarId(carId);
        setModalOpen(true);
    }, []);

    const handleEditCar = (car: CarType) => {
        actions.editCar(car);
        setModalOpen(false);
        setEditCarId('');
    };

    const handleCancelEditCar = useCallback(() => {
        setModalOpen(false);
        setEditCarId('');
    }, []);

    const handleOnCloseModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    return (
        <StyledCarScreen>
            <Header title='Car App' />
            <CarForm />
            <CarTable onEdit={onEditCar} />
            {editCarId && isModalOpen && (
                <Modal onClose={handleOnCloseModal}>
                    <EditCar
                        handleEditCar={handleEditCar}
                        carId={editCarId}
                        handleCancelEditCar={handleCancelEditCar}
                    />
                </Modal>
            )}
        </StyledCarScreen>
    );
};

export default CarScreen;
