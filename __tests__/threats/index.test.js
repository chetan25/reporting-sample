import { render, cleanup } from "@testing-library/react";
import { useRouter } from 'next/router';
import { ThreatPage } from 'Pages/threats/index';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import axios from "axios";
jest.mock('axios'); //Add this on top of your test file.

jest.mock("next/router");
afterEach(cleanup);

let store;
const mockStore = configureStore([]);
describe('Threat Page should render correctly', () => {
    beforeEach(() => {
        axios.get.mockClear();
    });

    it('should render the Threat Page with Error State', async  () => {
        useRouter.mockReturnValue({
            asPath: '/test?type=error'
        });
        store = mockStore({
            threatData: null,
        });
        store.dispatch = jest.fn();
        axios.get.mockRejectedValue(null);
        const { findByText } = render(
            <Provider store={store}>
                <ThreatPage />
            </Provider>
        );
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledTimes(0);
        const errorCode = await findByText('Sorry, something went wrong.');
        expect(errorCode).toBeDefined();
    });
});