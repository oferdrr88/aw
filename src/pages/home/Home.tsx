import Card from '../../components/card/Card';
import Title from '../../components/Title';
import { authHeaders, BASE_URL } from '../../config/config';

import './home.css';

function Home() {
    return (
        <>
            <div className="">
                <Title main="Animall World" sub="Special Livestock Sales" />
            </div>
        </>
    );
}

export default Home;
