import { useState, useEffect } from "react";

const MAX_CAPACITY = 10;

function Accommodate(props){

    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [cnt, setCnt] = useState(0);
    const increaseCnt = () => {
        if(cnt < MAX_CAPACITY){
            setCnt(cnt+1);
        }else{
            setIsFull(true);
        }
        console.log("debug >>>> cnt event, ", cnt)
        
    }

    const decreaseCnt = () => {
        if(cnt > 0){
            setCnt(cnt-1);
            setIsFull(false);
        }
    }

    useEffect(() => {
        console.log("debug >>>> cnt useEffect, ", cnt)
        if(cnt >= MAX_CAPACITY){
            setIsFull(true);
        }
        if(cnt <= 0){
            setIsEmpty(true);
        }else{
            setIsEmpty(false);
        }
    }, [cnt]);


    return(
        <div>
            <p>{`총 ${cnt}명 수용하였습니다.`}</p>
            <button onClick={increaseCnt} disabled={isFull}
                    class="btn btn-primary">입장</button>
                    &nbsp;&nbsp;&nbsp;
            <button class="btn btn-danger"
                    onClick={decreaseCnt} disabled={isEmpty}>퇴장</button>

            { isFull && <p style={{color : 'red'}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;