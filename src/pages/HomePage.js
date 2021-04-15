import Footer from "../components/Footer";
import Nav from "../components/Navbar";
// import ProfilePreview from "../components/ProfilePreview";
import RecentItems from "../components/RecentItems";
import SiteName from "../components/SiteName";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem;
`;

const HomePage = () => {
  return (
    <>
      <SiteName />
      <Nav />
      <Container>
        {/* <ProfilePreview /> */}
        <RecentItems />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
