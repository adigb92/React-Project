import { FunctionComponent } from "react";
import Footer from "./Footer";


interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>

      <div className="container mb-3">
        <h3 className="display-3 text-primary text-center m-3">Welcome to biz</h3>
        <img src="https://c.files.bbci.co.uk/F7F7/production/_120397436_5_business_cards_getty.jpg" alt="" />
        <img src="https://www.moo.com/dam/jcr:57fb952b-0fac-4717-8575-2bab69029701/0199WF-CH-640x350-business-cards.jpg"
          alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
