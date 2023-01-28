import { title } from 'process';
import { UserCard } from '../../models/Card';
import { useEffect, useState } from 'react';
import Title from '../title/Title';
import { authHeaders, BASE_URL } from '../../config/config';
import { useNavigate, useParams } from 'react-router';
import './onecard.css';
import { Link } from 'react-router-dom';
import Buttonback from '../back_button/Buttonback';

interface Props {
    cardData: UserCard;
}

function Onecard() {
    const navigate = useNavigate();
    // const { image, title, description, subTitle, phone, address, bizNumber, user_id } = cardData;

    const [card, setCard] = useState<UserCard>();

    const params = useParams();

    function show_Card(id: string) {
        console.log(id);
        fetch(` ${BASE_URL}/cards/${id}`, {
            method: 'GET',
            headers: authHeaders(),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCard(json);
            });
    }

    useEffect(() => {
        if (params && params.id) {
            show_Card(params.id);
        }
    }, []);

    return (
        <>
            <div className="bg-info">
                <Title main="Animall World" sub="Info" />
            </div>

            <div className="card-body bg-info card px-5 ">
                <img src={card?.image?.url} className="card-img-top card_img" alt="" />
                <h5 className="card-title text-center">
                    <p> {card?.title}</p>
                </h5>

                <p className="card-text text-center"> subTitle:{card?.bizNumber}</p>

                <p className="card-text text-center"> :({card?.address})</p>
                <p className="card-text text-center">phone{card?.description}</p>
                <p className="card-text text-center"> card1111{card?.title} </p>

                <div className="bg-info text-center px-5"></div>
                <Buttonback />
            </div>
        </>
    );
}

export default Onecard;
function setBusinessowners(json: any) {
    throw new Error('Function not implemented.');
}
