import Hero from "../components/Hero";
import "../components/heroStyles.css";

const Home = () => {
  return (
    <>
      <Hero
        className="cName"
        homeImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
        tittle="learn"
        text="we love learning from something"
        url="/"
        btnClass="show"
      />
    </>
  );
};

export default Home;
