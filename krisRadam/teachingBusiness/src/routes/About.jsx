import Hero from "../components/Hero";
import aboutPhoto from "../images/mountain.jpg";
const About = () => {
  return (
    <>
      <Hero
        cName="home-aboutPage"
        homeImage={aboutPhoto}
        title="about"
        btnClass="hello btn"
      />
    </>
  );
};

export default About;
