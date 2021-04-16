import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import RecentItems from "../components/RecentItems";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem;
`;

const HomePage = () => {
  return (
    <>
      <Nav />
      <Container>
        <RecentItems />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
