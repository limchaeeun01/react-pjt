import { useState } from "react";

function useCounter() {
    const [cnt, setCnt] = useState(0);

    const increaseCnt = () => {
        setCnt((cnt) => cnt + 1); // cnt + 1의 결과를 반환
    };

    const decreaseCnt = () => {
        setCnt((cnt) => Math.max(cnt - 1, 0)); // Math.max(cnt - 1, 0)의 결과를 반환
    };

    return [cnt, increaseCnt, decreaseCnt];
}

export default useCounter;
