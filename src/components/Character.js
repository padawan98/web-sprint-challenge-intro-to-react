// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
    text-align:center;
    button
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
    const {charInfo} = props;
    // console.log(charInfo);
    return(        
        charInfo.map(oneChar => 
            {
                return(
                    <StyledChar>
                        <div className="card">
                            <button>{oneChar.name}</button>
                            <h2>{oneChar.skin_color}</h2>
                        </div>
                    </StyledChar>
                );
            }));
}


export default Character;