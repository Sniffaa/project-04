import './App.css'

function App() {

  return (
      <form className='login-form'>
        <h1 className='login-l-h1'>Login</h1>
        <br></br>
        <label className='login-u-label' for='username'>Username</label>
        <br></br>
        <input className='login-u-input'></input>
        <br></br>
        <label className='login-p-label' for='password'>Password</label>
        <br></br>
        <input className='login-p-input'></input>
        <br></br>
        <button className='login-l-button'>Login</button>
        <br></br>
        <p className='login-fp-p'><a href='#'>Forgot Your Password?</a></p>
        <br></br>
        <p className='login-ca-p'><a href='#'>Want To Create An Account?</a></p>
      </form>
  )
}

export default App