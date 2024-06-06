import React from 'react';
import ReservationForm from './ReservationForm'; // Importa el formulario de reservación
const SuccessPage = () => {
    return (
        <div className="success-message">
            <ReservationForm /> {/* Incluye el formulario de reservación */}
        </div>
    );
};

export default SuccessPage;
