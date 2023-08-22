import Header from "../components/Header"
import Products from "../components/Products";
import Search from "../components/Search";
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  text-align: center;
`

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Search />
      <Products />
    </HomeContainer>
  )
}

export default Home
