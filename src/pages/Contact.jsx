import { useState } from 'react';
import { validateName, validateEmail, validateMessage } from '../utils/helpers';

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

                <button type='submit' className='btn btn-primary'>Send</button>
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