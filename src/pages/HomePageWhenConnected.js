import Footer from "../components/Footer";
import RecentItems from "../components/RecentItems";
import styled from "@emotion/styled";
import NavCo from "../components/NavbarWhenConnected";

const Container = styled.div`
  margin: 2rem;
`;

const HomePageCo = () => {
  return (
    <>
      <NavCo />
      <Container>
        <RecentItems />
        <Footer />
      </Container>
    </>
  );
};

export default HomePageCo;
