import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {

    return (
        <>
            <div className="container mt-3">
                <footer className="text-center text-lg-start text-white footer-dark bg-dark">
                    <div className="text-center">
                        <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@biz.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    </div>
                    <div className="text-center">
                        © 2023 Copyright:
                        <p className="text-white">
                            Adi Gabay
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;