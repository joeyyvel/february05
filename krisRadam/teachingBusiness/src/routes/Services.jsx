import Hero from "../components/Hero";
import servicesPhoto from "../images/services.jpg";

const Services = () => {
  return (
    <>
      <Hero
        cName="home-aboutPage"
        homeImage={servicesPhoto}
        tittle="services"
      />
    </>
  );
};

export default Services;
