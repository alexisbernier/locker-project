import About from "../components/About";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import RecentItems from "../components/RecentItems";
import SiteName from "../components/SiteName";

const HomePage = () => {
  return (
    <>
      <SiteName />
      <Nav />
      <About />
      <RecentItems />
      <Footer />
    </>
  );
};

export default HomePage;
