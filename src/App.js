import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState({
    firstName:'',
    secondName:'',
    email:''
  })
  const [submit, setSubmit] = useState(false)
  const [validate, setValidate] = useState(false)

  //function that stores input change to the state
  const onInputChange = (e) => {
    let data = {
      [e.target.id] : e.target.value
    }
    setValue({...value, ...data});
  }

  //function to submit form
  const submitForm = (e) => {
    e.preventDefault();
    setSubmit(true);
    if(value.firstName && value.secondName && value.email) {
      setValidate(true)
    }
  }

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={submitForm}>
        {submit && validate ? <div className="success-message">Thank you for registering!</div> : null}
        <input className='form-field' type="text" onChange={onInputChange} id='firstName' value={value.firstName} placeholder='First Name' />  
        {submit && !value.firstName ? <span>Type in your first name</span> : null}      
        <input className='form-field' type="text" onChange={onInputChange} id='secondName' value={value.secondName} placeholder='Last Name' />    
        {submit && !value.secondName ? <span>Type in your second name</span> : null}    
        <input className='form-field' type="email" onChange={onInputChange} id='email' value={value.email} placeholder='Email' />  
        {submit && !value.email ? <span>Type in your email</span> : null}
        <button className='form-field' type='submit'>SUBMIT</button>      
      </form>      
    </div>
  );
}

export default App;
