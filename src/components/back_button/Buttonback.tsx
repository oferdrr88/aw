import { Link } from 'react-router-dom';
import './back_button.css';
function Buttonback() {
    return (
        <>
            <div className="  text-center">
                <button className=" btn_back btn-primary text-center myButton">
                    <Link to={`/business_owners`} className=" text-danger">
                        back
                    </Link>
                </button>
            </div>
        </>
    );
}

export default Buttonback;
