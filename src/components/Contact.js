import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const handleForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(name, email, message);

        emailjs.sendForm('service_in1qsac', 'template_610d6re', form.current, 's0NHrI-rKvn9ej2TD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        e.target.reset();
    };





    return (
        <div className='container mt-5 w-50 mx-auto' id='contact'>
            <h2 className='text-primary text-center my-5'>Let's get in touch</h2>
            <form ref={form} className='shadow p-5 rounded' onSubmit={handleForm}>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Your name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name='name'
                        placeholder="name" />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        name='email'
                        id="exampleFormControlInput2"
                        placeholder="name@example.com" />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                    <textarea
                        class="form-control"
                        name="message"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </form>
        </div>
    );
};

export default Contact;