import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');


    const handleAddressBlur = e => {
        setAddress(e.target.value);
    };
    const handleSubjectBlur = e => {
        setSubject(e.target.value);
    };
    const handlePhoneNumberBlur = e => {
        setPhoneNumber(e.target.value);
    };

    const handleCheckout = e => {
        e.preventDefault();
        const shipping = {
            name: user?.displayName,
            email: user?.email,
            address,
            phoneNumber,
            subject
        };
        console.log(shipping);
        e.target.reset();

    };

    return (
        <div className='form-container my-5 shadow-lg border-0'>
            <div>
                <h2 className='form-titel  text-center my-5 text-primary fw-bold'>Client Information</h2>

                <form onSubmit={handleCheckout}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input value={user?.displayName} type="text" disabled />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} type="text" disabled />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="number" name="phone-number" id="" required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="subject">Choose Service</label>
                        <select name='subject' onBlur={handleSubjectBlur}>
                            <option defaultValue="wedding">Wedding Photography</option>
                            <option value="Personal">Personal Photoshoot</option>
                            <option value="Commercial">Commercial Photography</option>
                            <option value="Events">Events Photography</option>
                        </select>
                    </div>


                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Information" />
                </form>

            </div>

        </div>
    );
};

export default CheckOut;