import React from 'react';
import { useState } from 'react';
import { authHeaders, BASE_URL } from '../config/config';
import { UserCard } from '../models/Card';

interface Props {
    cardData: UserCard;
}

function Favorite_choice({ cardData }: Props) {
    // const [item, setItem] = useState(['']);
    // console.log('item=', item);
    const [ch_icon, setCh_icon] = useState(true);
    const { image, title, description, subTitle, phone, address, bizNumber, _id } = cardData;
    const arrey_id: any[] = [];

    React.useEffect(() => {
        console.log('----', ch_icon);
    }, [ch_icon]);

    const toggle = () => {
        // const Aid = (arrey_id = []);
        setCh_icon((ch_icon) => !ch_icon);
        if (ch_icon === true) {
            arrey_id.push(_id);
            console.log('arrey= 0 =', arrey_id[0], 'arrey= 1 =', arrey_id[1], 'arrey= 2 =', arrey_id[2]);
        }
    };

    const getFilter = () => {
        // console.log('fetch', ch_icon, _id, 'arretid', Aid);
        // fetch(` ${BASE_URL}/cards`, {
        //     method: 'GET',
        //     headers: authHeaders(),
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         setBusinessowners(json);
        //     });
    };

    return (
        <>
            <div className=" ">
                <div className="d-flex bg-info  justify-content-evenly ">
                    <div>
                        <button className="btn_new " onClick={toggle}>
                            {ch_icon ? <i className="bi bi-star text-center  "> blank</i> : <i className="bi bi-star-fill text-info">choice</i>}
                        </button>
                    </div>
                    <button onClick={getFilter} className="btn_new  ">
                        <i className="bi bi-funnel"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Favorite_choice;
