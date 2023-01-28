import { Link } from 'react-router-dom';
import { authHeaders, BASE_URL } from '../../config/config';
import { UserCard } from '../../models/Card';
import Buttonback from '../back_button/Buttonback';
import Favorite_choice from '../Favorite_choice';
import './card.css';

interface Props {
    cardData: UserCard;
    deleteCard?: (id: string | undefined) => void;
}

function Card({ cardData, deleteCard }: Props) {
    const { image, title, description, subTitle, phone, address, bizNumber, _id } = cardData;

    function del_Card(card: UserCard) {
        fetch(`${BASE_URL}/cards/${card._id}`, {
            method: 'DELETE',
            headers: authHeaders(),
        })
            .then((response) => response.json())
            .then((json: UserCard) => {
                console.log(json);
                deleteCard && deleteCard(json._id);
            });
    }

    return (
        <>
            <div className="card m-4 " style={{ width: '16rem ' }}>
                <img src={image?.url} className="card-img-top" alt={image?.alt} />
                {/* <div className="badge text-bg-info">{title}</div> */}
                <div>
                    <Favorite_choice cardData={cardData} />
                </div>
                <div className="card-body  text-center">
                    <img src={'image?.url'} className="card-img-top card_img" alt="" />
                    <h5 className="card-title">
                        <button className="btn_new btn-info text-center">
                            {' '}
                            <Link to={`/onecard/${_id}`} className="btn_new btm-info">
                                {title}
                            </Link>
                        </button>
                    </h5>
                    <p className="card-text"> subTitle:{subTitle}</p>
                    <p className="card-text"> :({description})</p>
                    <p className="card-text">phone{phone}</p>
                    <p className="card-text"> adders: {address} </p>
                    <div className="bg-info text-center  d-flex justify-content-evenly">
                        <button onClick={() => del_Card(cardData)} className="btn_new  ">
                            <i className="bi bi-trash3"></i>
                        </button>

                        <Link to={`/onecard/${_id}`} className="btn_new  ">
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                    </div>

                    <p className="card-text">id:[{bizNumber}]</p>
                    <Buttonback />
                </div>
            </div>
        </>
    );
}

export default Card;
