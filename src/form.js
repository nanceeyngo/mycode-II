import React, {useState} from 'react';
import './form.css';


export default function FormComponent() {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setInputValues(values => ({...values, [name]: value}));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with input:', inputValues)
    }
    return (
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:  
            <input 
                type="text"
                name='username'
                value={inputValues.username || ""}
                onChange={handleInputChange} />
            </label><br></br><br></br>

            <label>
                Enter your email:  
            <input 
                type="email"
                name='email'
                value={inputValues.email || ""}
                onChange={handleInputChange} />
            </label><br></br><br></br>

            <label>
                Enter your age:  
            <input 
                type="number"
                name='age'
                value={inputValues.age || ""}
                onChange={handleInputChange} />
            </label><br></br><br></br>

            <label>
                Enter your address:  
            <input 
                type="text"
                name='address'
                value={inputValues.address || ""}
                onChange={handleInputChange} />
            </label><br></br><br></br>

            <label>
                Enter your password:
            <input 
                type='password'
                name='password'
                value={inputValues.password || ""}
                onChange={handleInputChange} />
            </label><br></br><br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    )


}


