import {createStore, Store} from 'redux';
import { reducer } from 'State/reducer';

export interface IAttacks {
    type: string;
    count: number
}

export interface IDetails {
    question: string;
    description: string;
    attacks: IAttacks[]
}

export interface IRow {
    title: string;
    request: number;
    icon?: string;
}
export interface IIdentityWithRequest {
    title: string;
    identities: IRow[]
}

export interface IAssociatedDomain {
    title: string;
    domains: IRow[]
}

export interface IGridData {
    identitiesWithRequest: IIdentityWithRequest;
    associatedDomain: IAssociatedDomain;
}

export interface IChartData {
    totalRequests: string;
    percentage: string;
    icon: string;
    data: {
        name: string;
        value: number;
    }[];
}
export interface IThreat {
    details: IDetails;
    gridData: IGridData;
    chartData: IChartData;
}

export interface IApplicationState {
    threatData: IThreat | null;
}

export const defaultState: IApplicationState = {
    threatData: null
};

const initializeStore = (initialState: IApplicationState = defaultState): Store<IApplicationState> => (
    createStore(reducer, initialState)
);

export default initializeStore;