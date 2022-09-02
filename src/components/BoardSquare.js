import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const BoardSquare = ({x, y, hasRedPiece, hasBlackPiece}) => {

    const [xPos, setXPos] = useState('')
    const [yPos, setYPos] = useState('')
    const [redPiece, setRedPiece] = useState(false)
    const [blackPiece, setBlackPiece] = useState(false)

    useEffect(() => {
        setXPos(x)
        setYPos(y)
        setRedPiece(hasRedPiece)
        setBlackPiece(hasBlackPiece)
    }, [])

    const Square = styled.div`
    height: 120px;
    width: 120px;
    border: 3px solid #062c43;
    `


    return(
        <div>
        <Square>X={x}, Y={y}, hasRed={hasRedPiece.toString()}, hasBlack={hasBlackPiece.toString()}</Square>
        </div>
    )


}

export default BoardSquare;