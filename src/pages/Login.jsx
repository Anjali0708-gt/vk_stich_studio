import react from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
function Login()
{
     const [username, setUsername] = useState('');
     const[password,setpassword]=useState('');
     const handleLogin = async () => {
        try {
            const req = await axios.post('http://localhost:3000/api/login', { username, password });
            console.log(req.data);
            toast.success('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Login failed!');
        }
     }


    return(
        
    <>
        <div className="logincontainer">
            <h1>Login Page</h1>
            <div className="login-form">
                <form action="" method="post" onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    </>
    
    )
    
}

export default Login;