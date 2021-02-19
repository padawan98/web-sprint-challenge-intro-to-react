// Write your Character component here
import React,{useState} from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
    text-align:center;
    h1
    {
        color:#cd9dd4;
        &:hover
        {
            color:#6a8c8f;
        }
    }
`

const Character = (props) =>
{
    const {charInfo} = useState(props);
    console.log(charInfo);
            charInfo.map(oneChar => 
            {
                return(
                    <StyledChar>
                        <h1>{oneChar.name}</h1>
                        <p>{oneChar.species}</p>
                    </StyledChar>
                );
            });
}


export default Character;