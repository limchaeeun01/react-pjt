import React from 'react';
import Notification from './Notification';

const ary = [
    {
        id : 1,
        message : "오늘은 말복입니다."
    },
    {
        id : 2,
        message : "급여 입금되었습니다."
    },
    {
        id : 3,
        message : "리액트의 상태관리 및 컴포넌트 생명주기에 대하여 살펴봅시다."
    },
];

let timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
        };
    }
    componentDidMount(){
        const {list} = this.state;
        timer = setInterval(() => {
            if(list.length < ary.length){
                list.push(ary[list.length]);
                this.setState({
                    list : list, 
                });
            }else{
                
                clearInterval(timer);
            }
        }, 9000);
    }
    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }

    }
    render(){
        return(
            <div>
                { this.state.list.map((list) => {
                    return(
                        <Notification
                            key={list.id}
                            id={list.id}
                            message={list.message}/>
                    );
                })
                    
                };
            </div>
        );
    }

}

export default NotificationList;