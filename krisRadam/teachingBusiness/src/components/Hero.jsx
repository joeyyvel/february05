import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.homeImage} alt="homeImage" className="homePicture" />

        <div className="home-text">
          <h1>{props.tittle}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}></a>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  cName: PropTypes.string,
  homeImage: PropTypes.string,
  tittle: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.submit,
  buttonText: PropTypes.string,
};

export default Hero;
