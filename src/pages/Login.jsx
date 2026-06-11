import react from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import './login.css';
function Login()
{
     const [username, setUsername] = useState('');
     const[password,setpassword]=useState('');
     const handleLogin = async () => {
        console.log('Username:', username);
    //     try {
    //         const req = await axios.post('http://localhost:3000/api/login', { username, password });
    //         console.log(req.data);
    //         toast.success('Login successful!');
    //     } catch (error) {
    //         console.error('Error logging in:', error);
    //         toast.error('Login failed!');
    //     }
      }


    return(
        
    <>
        <div className="logincontainer">
            
            <div className="login-form">
                <h1>Welcome Back</h1>
<p className="login-subtitle" style={{ color: 'rgb(255, 252, 252)' }}>Sign in to manage appointments</p>
                <form action="" method="post" onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <p className="signup-link" style={{ color: 'rgb(255, 252, 252)' }}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
 <p className="forgot-password"> Forgot Password?</p>
                </form>
            </div>

        </div>
    </>
    
    )
    
}

export default Login;