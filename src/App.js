import './App.css';

function App() {
  return (
    <div className='form-container'>
      <form className='register-form'>
        <input className='form-field' type="text" placeholder='First Name' />        
        <input className='form-field' type="text" placeholder='Last Name' />        
        <input className='form-field' type="email" placeholder='Email' />  
        <button className='form-field' type='submit'>SUBMIT</button>      
      </form>      
    </div>
  );
}

export default App;
