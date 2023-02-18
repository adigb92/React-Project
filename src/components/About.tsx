import { FunctionComponent } from "react";
import Footer from "./Footer";



interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {


    return (
        <>

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg">
                        <img width={"100%"} className="img"
                            src="https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg"
                            alt="" />
                    </div>
                    <div className="col-lg">
                        <h1 className="display-3 text-primary">Who Are We ?</h1>
                        <p className="mt-2">
                            <strong>
                                Biz is a platform for creating and publishing business cards.
                                Other users will be able to see your business details and contact you with the details
                                you provide on your business card, Register now and start your journey!
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
