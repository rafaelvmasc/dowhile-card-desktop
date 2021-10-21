import React from 'react'
import styled from 'styled-components'
import degrade1 from '../../Assets/images/degrade1.svg'
import degrade2 from '../../Assets/images/degrade2.svg'

const Degrade1 = styled.img`
position: absolute;
top: 0;
right: 0;
`
const Degrade2 = styled.img`
position: absolute;
top: 0;
left: 0;

`

function Degrades() {
    return (
        <>
            <Degrade1 src={degrade1} alt="" />
            <Degrade2 src={degrade2} alt="" />
        </>
    )
}

export default Degrades
