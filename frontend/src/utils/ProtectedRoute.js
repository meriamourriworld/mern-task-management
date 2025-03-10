import { useContext } from 'react'
import { UserContext } from '../api/userApi';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const user = useContext(UserContext);
    console.log("user")
    console.log(user)
    if(!user)
    {
        return <Navigate to="/" replace/>;
    }
    return children;
}

export default ProtectedRoute;
