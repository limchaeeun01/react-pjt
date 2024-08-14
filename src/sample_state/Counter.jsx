import {useEffect, useState} from 'react';

function Counter(props){

    const [counter, setCounter] = useState(0);

    //useEffect는 화면의 렌더링 이후 필요한 작업을 훅으로 수행하는 영역
    useEffect(() => {
        document.title = `총 ${counter}번 클릭하셨습니다.`;
    });

    const increaseCnt = () => {
        console.log("debug >>>> button clicked!");
        setCounter(counter+1);
    }

    return(
        <div>
            <p>총 {counter}번 클릭하셨습니다.</p>
            <button onClick={(increaseCnt)}>
                Click
            </button>
        </div>
    );
}

export default Counter;