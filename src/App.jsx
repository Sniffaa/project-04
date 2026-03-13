import './App.css'

function App() {

  return (
    <div className='login'>
      <h1>Login</h1>
      <div className='fillusername'>
        <h6>Enter Username</h6>
        <input></input>
      </div>
      <div className='fillpassword'>
        <h6>Enter Password</h6>
        <input></input>
      </div>
      <div className="continue">
        <button>Login</button>
      </div>
    </div>
  )
}

export default App