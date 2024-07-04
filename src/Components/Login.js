import "./Login.css";
function Login() {
  return (
    <div className='container-fluid bg-dark vh-100'>
      <div className='row justify-content-md-center'>
        <div className='col-md-4 p-4 back'>
          <form className="login">
            <h3 className="text-center fw-bold">Sign In</h3>
            <div className='mb-3'>
              <label className="fw-bold">Email address</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-3'>
              <label className="fw-bold">Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
              />
            </div>
            <div className='mb-3'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Remember me
                </label>
              </div>
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
            <p className='forgot-password text-right text-decoration-underline'>Don't have any account?</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
