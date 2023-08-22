import Input from "../Input"
import { Title } from "../Title"
import styled from "styled-components"

const SearchContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url('https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2023/07/1920w_nationalbrand.webp');
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchRow = styled.div`
`

const Search = () => {
  return (
    <SearchContainer>
      <SearchRow>
        <Title>Agentes. Passeios. Empréstimos. Casas.</Title>
        <Input />
      </SearchRow>
    </SearchContainer>
  )
}

export default Search