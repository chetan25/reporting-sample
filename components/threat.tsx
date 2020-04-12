import Head from 'next/head';
import 'Assets/default.less';
import 'Assets/threat.less';
import { Breadcrumb, Button, Empty, Icon } from 'antd';
import { connect } from 'react-redux';
import { IThreat, IApplicationState } from 'State/store';
import Link from "next/link";
import Details from 'Components/details';
import Grid from 'Components/grid';
import CustomLineChart from 'Components/./line-chart';

interface IProps {
    threatData: IThreat|null;
    type: string|null;
}

export const Threat = (props: IProps): JSX.Element => {
    const { threatData, type } = props;

    const renderThreatInfo = () => {
        const { details, gridData, chartData } = threatData!;
        return (
            <div className="container">
                <Head>
                    <title>Cisco Umbrella</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <div className="threat-title">
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link href='/'>
                                        <a>Reporting</a>
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item><a>Threats</a></Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div><h3>{`${type!.charAt(0).toUpperCase()}${type!.slice(1)}`}</h3></div>
                    </div>

                    <div className='content'>
                        <div className="description">
                            <Details details={details} />
                        </div>

                        <div className="chart">
                            <div className='chart-header flex-space-between'>
                                <div>
                                    <span>{chartData.totalRequests}</span>
                                    <span> Request</span>
                                    <span>
                                        (<strong><Icon type={chartData.icon} style={{ fontSize: '12px' }}/>
                                        {chartData.percentage} request</strong> vs. last 7 days)
                                    </span>
                                </div>
                                <div className='m-r-1'>
                                    <strong><a>Allow</a>/<a>Block</a></strong> | <a>Global %</a>
                                </div>
                            </div>
                            <div className='m-t-1 full-width'>
                                <CustomLineChart data={chartData.data} />
                            </div>
                            <div className='chart-footer'>
                                <a>View Activity</a>
                            </div>
                        </div>

                        <div className="grids">
                            <div className='grid-items'>
                                <Grid
                                    title={gridData.identitiesWithRequest.title}
                                    data={gridData.identitiesWithRequest.identities}
                                ></Grid>
                            </div>
                            <div className='grid-items'>
                                <Grid
                                    title={gridData.associatedDomain.title}
                                    data={gridData.associatedDomain.domains}
                                ></Grid>
                            </div>
                        </div>
                    </div>

                </main>

                <footer>

                </footer>
            </div>
        );
    };

    const renderEmptyState = () => {
        return (
            <div className='center-align'>
                <Empty
                    description={` The searched threat type ${type} does not exist.`}
                >
                    <Button type="primary" key="home">
                        <Link href='/'>
                            <a>Back</a>
                        </Link>
                    </Button>
                </Empty>
            </div>
        )
    };

    return !threatData ? renderEmptyState() : renderThreatInfo();
};

interface IStateFromProps {
    threatData: IThreat|null;
}

const mapStateToProps = (state: IApplicationState): IStateFromProps => ({
    threatData: state.threatData
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps);
// and that function returns the connected, wrapper component:
export const ConnectedComponent = connectToStore(Threat);

export default ConnectedComponent;
