import React, {useState, useEffect} from 'react';
import BoardSquare from '../components/BoardSquare';

const BoardContainer = () => {

    const [board, setBoard] = useState([])

    useEffect(() => {
        let squares = [];
        for(let i = 1; i < 8; i++){
            for(let i2 = 1; i2 < 8; i2++){
                squares.push(<BoardSquare x={i} y={i2} key={Date.now()} hasRedPiece={false} hasBlackPiece={false}/>)
            }
        }
        setBoard(squares)
    }, [])

    

    return(
        <div>
        {board}
        </div>
    )

}

export default BoardContainer