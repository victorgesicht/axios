

const Loginform = () => {
  return (
    <div className="container">
        <h1>Login</h1>
        <div className="form_wrapper">
            <form>

                <div>
                    <input className="form-control bg-slate-400" type="text" placeholder="username" />
                </div>
                <div>
                    <input className="form-control bg-slate-500" type="text" placeholder="password" />
                </div>
                <div>
                    <input className="form-control bg-slate-500" type="Password" placeholder="confirm password" />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    </div>

  )
}

export default Loginform