import { STORE_THREAT_DATA } from 'State/action'
import { IThreat, IApplicationState, defaultState } from 'State/store';
import { Reducer } from 'redux';

interface IAction {
    type: string;
    payload: IThreat
}
export const reducer: Reducer<IApplicationState, IAction> = (
    state: IApplicationState = defaultState,
    action: IAction
) => {
    switch (action.type) {
        case STORE_THREAT_DATA:
            console.log(action.payload, 'pay');
            return {
                threatData: {...action.payload}
            };
        default:
            return state
    }
};