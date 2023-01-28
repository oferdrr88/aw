import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../../components/card/Card';
import Title from '../../components/Title';
import { authHeaders, BASE_URL } from '../../config/config';
import { UserCard } from '../../models/Card';
import './home.css';

function Home() {
    const [display, setDisplay] = useState('list');
    const [businessowners, setBusinessowners] = useState<Array<UserCard>>([]);

    function handeleDisplay(display_Type: string) {
        setDisplay(display_Type);
        console.log('display', display_Type);
    }

    return (
        <>
            <div className="">
                <Title main="Animall World" sub="Special Livestock Sales" />

                <div>
                    <input type="text" placeholder="Sarch" className="form-control my-4 w-50 m-auto" />
                </div>

                <div className="  border box_display  m-5">
                    <p className=""> Display-Mode</p>
                    <button onClick={() => handeleDisplay('grid')} className="btn">
                        <i className="bi bi-caret-down  p-2 fs-2"></i>
                    </button>

                    <button onClick={() => handeleDisplay('list')} className="btn">
                        <i className="bi bi-caret-right p-2 fs-2"></i>
                    </button>
                </div>

                <div className={`${display} `}>
                    <div className="">
                        {businessowners.map((businessowners) => (
                            <Card key={businessowners._id} cardData={businessowners} />
                        ))}
                    </div>

                    <div className="card  p-2 m-2 ">
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" className="card-img-top" alt="..." />
                        <div className="card-body p-2  m-2">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text </p>
                            <button className="btn_new">Go somewhere</button>
                        </div>
                    </div>

                    <div className="card  p-2 m-2 ">
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" className="card-img-top" alt="..." />
                        <div className="card-body p2 ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
