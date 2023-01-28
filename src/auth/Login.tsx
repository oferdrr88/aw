import Joi from 'joi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Title from '../components/title/Title';
import { BASE_URL } from '../config/config';
import { setToken } from './tokenMgmt';

interface ISlogindata {
    name: string;
    email: string;
    password: string;
    isBiz: boolean;
    isAdmin: boolean;
}

async function posrRequest<T>(url: string, data: T) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        return result;
    } catch (error) {}
}

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('of4@gmail.com');
    const [password, setPassword] = useState<string>('1234567');
    const [error, setError] = useState<string>('');

    function submit() {
        console.log('click');

        const schema = Joi.object().keys({
            email: Joi.string()
                .required()
                .email({ tlds: { allow: false } })
                .min(3)
                .max(25),
            password: Joi.string().min(6).max(30),
        });

        const { error, value } = schema.validate({
            email,
            password,
        });

        if (error) {
            console.log(error.message);

            return;
        }

        posrRequest('/users/login', value).then((data) => {
            setToken(data.token);
            console.log(data);
            toast.success('Disconnected successfully');
            localStorage.setItem('ADMIN', data.isBiz);
            localStorage.setItem('USER', data.name);
            window.location.reload();
            navigate('/home');
        });

        // sendregister(value);
    }

    return (
        <>
            <div className="  m-2 ">
                <Title main="Login registered customers" sub="You can log in as a registered user" />
            </div>
            <div className=" from-control w-25 m-auto px-4 bg-dark opacity-50 rounded-2 ">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-info">
                        email
                    </label>
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-info">
                        password
                    </label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={submit} className="btn_new btn-lg">
                    Sign Up
                </button>
            </div>
        </>
    );
}
export default Login;
