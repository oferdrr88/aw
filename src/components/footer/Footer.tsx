import Title from '../Title';
import './footer.css';
function Footer() {
    return (
        <>
            <div className="footer text-light">
                <Title main="Animall World" sub="" />
                <p className="border-top pt-3 text-center">
                    <span>
                        <i className="fas fa-dragon  ">Animall World</i>
                    </span>
                    <span className="mx-1">&copy;</span>
                    <span>{new Date().getFullYear()}</span>
                </p>
            </div>
        </>
    );
}

export default Footer;
