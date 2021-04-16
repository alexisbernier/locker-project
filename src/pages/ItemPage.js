import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Item from "../components/Item";
import styled from "@emotion/styled";
import ItemDescription from "../components/ItemDescription";
import LinksToBuyIt from "../components/LinksToBuyIt";

const Container = styled.div`
  margin: 2rem;
`;

const ItemPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <Item />
        <div>
          <p>Estimated price : 123$</p>
        </div>
        <ItemDescription />
        <LinksToBuyIt />
        <Footer />
      </Container>
    </>
  );
};

export default ItemPage;
