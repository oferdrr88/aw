import { Navigate } from 'react-router-dom';
import { verifyToken } from './tokenMgmt';

interface Props {
    children: React.ReactNode;
}

export function RouteGuardAuth({ children }: Props) {
    return verifyToken() ? <>{children}</> : <Navigate replace={true} to="/login" />;
}

export function RouteGuardNotAuth({ children }: Props) {
    return !verifyToken() ? <>{children}</> : <Navigate replace={true} to="/" />;
}
