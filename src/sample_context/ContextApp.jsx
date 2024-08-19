
// function ContextApp(){
//     return(
//         <GrandParent msg='props를 이용한 단계별 메시지 전달방식'/>
//     );
// }

// function GrandParent(props){
//     return(
//         <Parent msg={props.msg}/>
//     );
// }

// function Parent(props){
//     return(
//         <Child msg={props.msg}/>
//     );
// }

// function Child(props){
//     return(
//         <GrandChild msg={props.msg}/>
//     );
// }

// function GrandChild(props){
//     return(
//         <Message msg={props.msg}/>
//     );
// }

// function Message(props){
//     return(
//         <div className="container">
//             Recieved : {props.msg}
//         </div>
//     );
// }

import React, {createContext, useContext} from "react";

const UserContext = createContext({
    id : 'chaeni',
    password : 'chaeni',
    nickName : '채니빔'
});
UserContext.displayName = "상태공유 컨텍스트 트리";
function ContextApp(){
    const msg = 'context를 이용한 데이터 전달';
    return(
        <UserContext.Provider value={msg}>
            <GrandParent/>
        </UserContext.Provider>
        
    );
}

function GrandParent(props){
    return(
        <Parent/>
    );
}

function Parent(props){
    return(
        <Child/>
    );
}

function Child(props){
    return(
        <GrandChild />
    );
}

function GrandChild(props){
    return(
        <Message />
    );
}

function Message(props){
    const shareData = useContext(UserContext);
    console.log("debug >>> ", shareData);
    return(
        <div className="container">
            Recieved : {shareData.id} - {shareData.password} - {shareData.nickName}
        </div>
    );
}


export default ContextApp;