import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router';
import Buttonback from '../../components/back_button/Buttonback';
// import { getToken } from '../../auth/tokenMgmt';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import { authHeaders, BASE_URL } from '../../config/config';
import { UserCard } from '../../models/Card';
import './busness.css';

function Business_owners() {
    const [businessowners, setBusinessowners] = useState<Array<UserCard>>([]);
    const [sarch_card, setSarch_card] = useState<string>('');
    const navigate = useNavigate();

    const [display, setDisplay] = useState('grid');
    //                                                       display mode
    function handeleDisplay(display_Type: string) {
        setDisplay(display_Type);
        console.log('display', display_Type);
    }
    //                                                       getIBusiness
    function getIBusiness() {
        fetch(` ${BASE_URL}/cards`, {
            method: 'GET',
            headers: authHeaders(),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setBusinessowners(json);
            });
    }
    //                                                        sarch
    function handele_Sarch(value: string) {
        setSarch_card(value);
        // const range = value.toLowerCase();
    }

    function getFilter() {
        //  console.log('filter', ch_icon, _id, bizNumber);
        // if (ch_icon == true) {
        // console.log('fetch', ch_icon);
        // fetch(` ${BASE_URL}/cards`, {
        //     method: 'GET',
        //     headers: authHeaders(),
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         setBusinessowners(json);
        //  });
    }

    useEffect(getIBusiness, []);

    function create_card() {
        navigate('/Create_card');
    }
    //                                                    delete card
    function deleteCard(id: string | undefined) {
        if (id) {
            setBusinessowners(businessowners.filter((card) => card._id !== id));
        }
    }

    let filtred = [];

    if (sarch_card === '') {
        filtred = businessowners;
    } else {
        filtred = businessowners.filter((businessowners) => businessowners.title.toLowerCase().includes(sarch_card.toLowerCase()));
    }

    return (
        <>
            <Title main="Animall World" sub="Business page" />
            {/*                                                                sarch                       */}
            <div className=" from-control w-50  m-auto px-4 ">
                <div className="mb-3">
                    <label htmlFor="sarch_card" className="sarch_card">
                        sarch_card
                    </label>

                    <input type="text" className="form-control" placeholder="sarch_card" value={sarch_card} onChange={(e) => handele_Sarch(e.target.value)} />
                </div>
            </div>
            {/*                                                 crate card           */}
            <div className="px-5">
                <button className="myButton " onClick={create_card}>
                    <i className="bi bi-person-vcard px-3"></i>
                    Create a card
                </button>
            </div>

            {/*                                          display      */}
            <div className="">
                <div className="text-center ">
                    <button onClick={() => handeleDisplay('list')} className="myButton px-2">
                        <i className="bi bi-caret-down    "></i>
                    </button>

                    <button onClick={() => handeleDisplay('grid')} className="myButton px-2">
                        <i className="bi bi-caret-right  "></i>
                    </button>
                </div>
                {/* <button onClick={getFilter} className="btn_new  ">
                    <i className="bi bi-funnel"></i>
                </button> */}
            </div>

            {businessowners.length === 0 && <div className=" alert alert-info m-5">There are no data tabs</div>}

            <div className=" d-flex justify-content-center col-12">
                <div className={`${display} `}>
                    {filtred.map((businessowners) => (
                        <Card key={businessowners._id} cardData={businessowners} deleteCard={deleteCard} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Business_owners;
