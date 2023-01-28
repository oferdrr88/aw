import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
function isadmin() {
    //  navigate('/home');
}

function AdminOnly() {
    const admin = localStorage.getItem('ADMIN');

    if (admin === 'true') {
        return (
            <>
                <h2 className="text-center "> admin page</h2>
                <Navigate to="/Business_owners " replace={true} />
            </>
        );
    }
    return (
        <>
            <div className="text-center"> Forbidden</div>
            {toast.error('Not authorized', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: 'colored',
            })}
            <Navigate to="/home" replace={true} />;
        </>
    );
}

export default AdminOnly;
