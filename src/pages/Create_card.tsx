// Hide in the main menu
// Will be presented after business registration

import Joi, { date } from 'joi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { getToken } from '../auth/tokenMgmt';
import Buttonback from '../components/back_button/Buttonback';

import Title from '../components/Title';
import { authHeaders, BASE_URL } from '../config/config';
import { UserCard } from '../models/Card';

function Create_card() {
    const [title, setTitle] = useState<string>('');
    const [subTitle, SetSubTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    function handeleClick() {
        const schema = Joi.object().keys({
            title: Joi.string().required().min(3).max(25),
            subTitle: Joi.string().required().min(3).max(100),
            description: Joi.string().required().min(3).max(50),
            phone: Joi.string().required().min(3).max(10),
            address: Joi.string().required().min(3).max(50),
            url: Joi.string().required().min(3).max(1000),
        });

        const { error, value } = schema.validate({
            title,
            subTitle,
            description,
            address,
            phone,
            url,
        });

        if (error) {
            setError(error.message);
            return;
        }

        addIBusiness(value);
    }

    function addIBusiness(value: UserCard) {
        console.log(value);

        fetch(`${BASE_URL}/cards`, {
            headers: authHeaders(),
            method: 'POST',
            body: JSON.stringify(value),
        })
            .then((response) => {
                console.log(response);

                return response.json();
            })
            .then((result) => {
                console.log(result);
                resetForm();
                navigate('/business_owners');
            })

            .catch((error) => {
                console.log(error);
                toast.error('Failed to create a check card:', error.message);
                toast.error(error.message);
            });
    }

    function resetForm() {
        setError('');
        setTitle('');
        setDescription('');
        setAddress('');
        setPhone('');
        setUrl('');
    }

    return (
        <>
            <div className="  m-2 ">
                <Title main="Card creation form" sub="business card" />
            </div>
            <div className=" from-control w-50  m-auto px-4 ">
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" placeholder=" Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="subTitlee" className="form-label">
                        subTitle
                    </label>
                    <input type="text" className="form-control" placeholder=" subTitle" value={subTitle} onChange={(e) => SetSubTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        description
                    </label>
                    <input type="text" className="form-control" placeholder=" description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor=" address" className="form-label">
                        {' '}
                        address
                    </label>
                    <input type="text" className="form-control" placeholder=" address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor=" Phone" className="form-label">
                        {' '}
                        Phone
                    </label>
                    <input type="tel" className="form-control" placeholder="  Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor=" Business image" className="form-label">
                        {' '}
                        Business image
                    </label>
                    <input type="text" className="form-control" placeholder=" Business image" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>

                <button onClick={handeleClick} className="btn_new  btn-lg">
                    Sign Up
                </button>
                <Buttonback />
            </div>
            {error && <div className="text-danger">{error}</div>}
        </>
    );
}

export default Create_card;
