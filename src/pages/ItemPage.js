import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import SiteName from "../components/SiteName";
import Item from "../components/Item";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem;
`;

const ItemPage = () => {
  return (
    <>
      <SiteName />
      <Nav />
      <Container>
        <Item />
        <div>
          <h3>Estimated price : 123$</h3>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default ItemPage;
