import { useState } from "react";

function ButtonEvent(props){

    const [isFlag, setIsFlag] = useState(true);
    function btnHandler(name){
        console.log(`debug >>> btn click! ${name} !!`)
        setIsFlag( (isFlag) => !isFlag)
    }
    return(
        <div class="container">
            <button class={isFlag? "btn btn-primary" : "btn btn-danger"}
                    onClick={() => btnHandler('lim')}>
                {isFlag? '꺼짐' : '켜짐'}
            </button>
        </div>
        
    )
}

export default ButtonEvent;