import Footer from "../components/Footer";
import RecentItems from "../components/RecentItems";
import NavCo from "../components/NavbarWhenConnected";
import styled from "@emotion/styled";

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
