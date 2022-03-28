import React from "react";
import {chats, setChats} from "../reducer/chatsReducer";
import {postChat} from "firebase/firebaseApi";
import {RootState} from "../store/store";
import {connect} from "react-redux";


const mapStateToProps = ({chats}: RootState) => ({chats});


interface chat {
    chats: chats
}


export const ChatsContainer = connect(mapStateToProps,)((props: chat) => {

    const {chats} = props;

    const clickHandler = () => {
        postChat('userId');
    };
    return (
        <>
            <div onClick={clickHandler} style={{background: 'lightgreen', padding: '20px'}}>s</div>
            {Object.keys(chats).map((el) => {
                return <div key={el}>{ chats[el].chatName}</div>
            })}
        </>

    )
});