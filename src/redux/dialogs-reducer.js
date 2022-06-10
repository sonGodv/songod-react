const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Nikolay'},
        {id: 5, name: 'Lena'},
    ],
    messages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'Go'},
        {id: 3, massage: 'I can wait'},
        {id: 4, massage: 'We open the stafge'},
        {id: 5, massage: 'Baby go home'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, massage: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer

