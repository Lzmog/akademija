import {setLogAction} from '../actions/logAction';

export const setLog = () => (dispatch) => {
    const message = `Send some message`;
    const log = dispatch(setLogAction(message));

    return log;
};
