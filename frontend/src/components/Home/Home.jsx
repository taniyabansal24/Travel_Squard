import Hero from "../Hero";
import WhyChooseUs from "../WhyChooseUs.jsx";
import Testimonial from "../Testimonial";
//import Services from "../Services";
import Recommendation_tour from "../Recommendation_tour";
import Recommendation_hotel from "../Recommendation_hotel";
import Offers from "./Offers/Offers.jsx";
import About_us from "../About_us.jsx";
import ShowBlog from "../ShowBlog.jsx";

function Home() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Hero />
        <div className="my-14 ">
        <Offers />
        </div>
        <Recommendation_tour />
        <Recommendation_hotel />
        <ShowBlog />
        <About_us />
        <WhyChooseUs />
        <Testimonial />
      </div>
    </>
  );
}

export default Home;
