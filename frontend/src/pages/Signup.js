import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(event) => {
        event.preventDefault();

        await signup(email, password);
    }

    return (
        <>
       <div className="login-container">
        <img  className = "unit-logo" src = {require("../assets/login-img.png")} alt = "uni"/>
        <form className="signup" onSubmit={handleSubmit}>
            <h3 className='log'>Sign Up</h3>

            <label>Email: </label>
            <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />

            <label>Password: </label>
            <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign-Up</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
        </>
    )

}

export default SignUp

