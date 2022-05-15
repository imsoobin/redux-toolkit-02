import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../feature/useSlice";
import './login.css'

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(
            login({
                userName: userName,
                password: password,
                isLogin: true,
            }));
        setUserName('');
        setPassword('');
    }
    return (
        <Fragment>
            <form action="action_page.php" method="post" onSubmit={(e) => handleSubmitForm(e)}>
                <div className="container">
                  <label htmlFor="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" required 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button type="submit">Login</button>
                  {/* <label>
                    <input type="checkbox" name="remember" /> Remember me
                  </label> */}
                </div>

                <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                  <button type="button" className="cancelbtn">Cancel</button>
                  <span className="psw">Forgot <a href="#efef">password?</a></span>
                </div>
            </form>
        </Fragment>
    )
}
export default Login;