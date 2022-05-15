import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feature/useSlice";

const LogOut = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <>
            <div>
                <h1>Welcome</h1>
                <h3>{users?.userName}</h3>
            </div>
            <button onClick={(e) => handleLogout(e)}>Log out</button>
        </>
    )
}
export default LogOut;