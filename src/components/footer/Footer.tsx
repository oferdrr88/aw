import Title from '../title/Title';
import './footer.css';
function Footer() {
    return (
        <>
            <div className="footer text-light">
                <div className="">
                    <Title main="Animall World" sub="Ofer dahan" />
                </div>
                <div className="p-1">
                    <p className="border-top pt-3 text-center">
                        <span>
                            <i className="fas fa-dragon  ">Animall World</i>
                        </span>
                        <span className=" p-1">&copy;</span>
                        <span>{new Date().getFullYear()}</span>
                    </p>
                    <span className="px-4 ">
                        version :{new Date().getFullYear()}
                        <i className="bi bi-tencent-qq"></i>[0028]
                    </span>
                </div>
            </div>
        </>
    );
}

export default Footer;
