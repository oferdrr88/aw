import Joi from 'joi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import { BASE_URL } from '../config/config';

interface ISsinupData {
    name: string;
    email: string;
    password: string;
    isBiz?: boolean;
}

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    function submit() {
        console.log('click');

        const schema = Joi.object().keys({
            name: Joi.string().required().min(3).max(25),
            email: Joi.string()
                .required()
                .email({ tlds: { allow: false } })
                .min(3)
                .max(25),
            password: Joi.string().min(6).max(30),
        });

        const { error, value } = schema.validate({
            name,
            email,
            password,
        });

        if (error) {
            console.log(error.message);

            return;
        }

        sendregister(value);
    }

    function sendregister(data: ISsinupData) {
        data.isBiz = true;
        console.log(data);

        fetch(`${BASE_URL}/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((json) => {
                //  setBusinessowners(json);

                console.log(json);
                toast.success('The registration was done successfully');
                toast.success('Log in to the system');
                //  console.log(value);
                navigate('/login');
            });
    }

    return (
        <>
            <div className="  m-2 ">
                <Title main="Welcome to the store" sub="Registration page" />
            </div>
            <div className=" from-control w-50  m-auto px-4 ">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={submit} className="btn btn-primary btn-lg">
                    Sign Up
                </button>
            </div>
        </>
    );
}

export default Signup;
