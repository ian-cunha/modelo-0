import styled from "styled-components"

export const Title = styled.h1`
    width: 100%;
    padding: 5px 0;
    color: ${props => props.cor || 'white'};
    font-size: ${props => props.fontSize || '26px;'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`