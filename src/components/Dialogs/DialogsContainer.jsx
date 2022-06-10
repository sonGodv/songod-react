import React from 'react';
import classes from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const Message = (props) => {
//     return <div className={classes.dialog}>{props.message}</div>
// }
// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { (store) => {
//             let state = store.getState().dialogsPage;
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             let onNewMassageChange = (body) => {
//                 store.dispatch(updateNewMessageCreator(body))
//             }
//
//             return <Dialogs
//                 updateNewMessageBody={onNewMassageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={state}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;