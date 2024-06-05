import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [usercol, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { usercol, password })
            .then(res => {
                console.log(res);
                alert(res.data);  // Muestra la respuesta del servidor
            })
            .catch(err => {
                console.error('Error en la solicitud:', err);
                alert('Error en la solicitud');  // Muestra un mensaje de error al usuario
            });
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="usercol">Email</label>
                        <input type="usercol" placeholder='Enter Email' className='form-control'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
