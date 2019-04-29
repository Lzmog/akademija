import { setLog } from '../actions/logAction';

export const setLog = () => (dispatch) => {
    const message = `Send some message`;
    const log = dispatch(setLog(message));

    return log;
};
