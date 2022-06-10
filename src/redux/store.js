import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 0},
                {id: 2, message: 'Hello', likesCount: 30},
            ],
            newPostText: 'Enter text'

        },
        dialogsPage: {
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
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Egor'},
            ]

        }

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);

    }




}




export default store