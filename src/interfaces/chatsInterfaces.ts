export interface message{
    message:string
}

export interface chat {
    chatName:string,
    message:{
        [key:string]:message
    }
}

export interface chats {
    [key:string]:chat
}
