import { render, cleanup } from "@testing-library/react";
import { Threat } from 'Components/threat';
import { data } from 'Mocks/data';
afterEach(cleanup);

describe('Threat Component should render Empty State', () => {
    it('should render the Threat Page with Error State', async  () => {
        const props = {
            type: 'test',
            threatData: null,
        };
        const { findByText } = render(
            <Threat {...props} />
        );
        const emptyStateCode = await findByText(`The searched threat type ${props.type} does not exist.`);
        expect(emptyStateCode).toBeDefined();
    });

    it('should render the Threat Component with Data', async () => {
        const props = {
            type: 'test',
            threatData: data,
        };
        const { findByText } = render(
            <Threat {...props} />
        );
        const title = await findByText(`${data.details.question}`);
        expect(title).toBeDefined();
        const ChartRequest = await findByText(`${data.chartData.totalRequests}`);
        expect(ChartRequest).toBeDefined();
        const identityTitle = await findByText(`${data.gridData.identitiesWithRequest.title}`);
        expect(identityTitle).toBeDefined();
    });
});