import { useState } from 'react';
import { validateName, validateEmail, validateMessage } from '../utils/helpers';
import '../assets/styles/Contact.css'
import emailjs from '@emailjs/browser';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name'){
            setName(inputValue);
        } else if (inputType === 'email'){
            setEmail(inputValue);
        } else if (inputType === 'message'){
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8y8dypr', 'template_2s9hlgo', e.target, 'Bnhbsj36O7b1XByj2');

        if(!validateName(name)){
            setErrorMessage('Name is required');
            return;
        }
        if(!validateEmail(email)){
            setErrorMessage('Email not filled in correctly');
            return;
        }
        if(!validateMessage(message)){
            setErrorMessage('Message required');
            return;
        }
    };

    return(
        <>
            <h1 className='contact-title'>Contact</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='First and Last Name'
                />
                <input 
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='someone@example.com'
                />
                <textarea 
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Write your question or concern here'
                />

                <input className='submit-button'
                    type='submit' 
                    value='Send' />
            </form>
            {errorMessage && (
                <div className='error'>
                    <p className='error-message'>{errorMessage}</p>
                </div>
            )}
        </>
    );
}

export default Contact;