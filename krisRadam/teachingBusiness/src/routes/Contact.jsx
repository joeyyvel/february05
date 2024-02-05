import Hero from "../components/Hero";
import contactPhoto from "../images/contact.jpg";
const Contact = () => {
  return (
    <>
      <Hero
        cName="home-aboutPage"
        homeImage={contactPhoto}
        tittle="contact"
        btnClass="hide"
      />
    </>
  );
};

export default Contact;
