import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import photo1 from '../../images/pg3.jpg';

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
        <div className='px-5 my-5 ' id='contact'>
            <div >
                <p className='fw-bolder mb-0'>Contacts</p>
                <h2 className='text-primary fw-bold'>Let's get in touch</h2>
            </div>

            <div class="container px-4 py-5">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-12 col-md-12 col-lg-6" data-aos="fade-right">
                        <img src={photo1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-12 col-md-12 col-lg-6" data-aos="fade-left">
                        <form ref={form} className='shadow-lg p-5 rounded-3' onSubmit={handleForm}>
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
                                    placeholder="email" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea
                                    class="form-control"
                                    name="message"
                                    id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary btn-lg">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;