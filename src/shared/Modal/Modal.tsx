import React, { useCallback } from 'react';
import { generateRandomId } from '../../utils/generateRandomId';
import StyledModal from './Modal.styled';

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
    const modalId = generateRandomId();
    const handleOnClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const target = e.target as HTMLDivElement;

            if (target.id === modalId) {
                onClose();
            }
        },
        [onClose, modalId]
    );
    return (
        <StyledModal
            id={modalId}
            onClick={(e) => {
                handleOnClose(e);
            }}
        >
            <div className='modal '>{children}</div>
        </StyledModal>
    );
};

export default Modal;
