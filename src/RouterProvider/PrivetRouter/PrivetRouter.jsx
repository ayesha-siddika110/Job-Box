import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    if(user){
        return children
    }
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <Navigate to="/login" state={location?.pathname}></Navigate>
    );
};

export default PrivetRouter;