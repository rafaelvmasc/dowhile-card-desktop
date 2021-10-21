import React from 'react';
import Card from '../Components/Card';
import Strip from '../Components/Strip';
import styled from 'styled-components';
import Degrades from '../Components/Degrades';

const Container = styled.main`
height: 820px;
width: 1440px;
background-color: hsl(240,6%,8%);
display: grid;
place-items: center;
position: relative;
`

function Main() {
    return (
        <Container>
            <Degrades />
            <Strip />
            <Card />
        </Container>
    )
}

export default Main
