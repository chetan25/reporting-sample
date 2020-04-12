import 'Assets/default.less';
import { Dispatch } from 'redux';
import 'Assets/threat.less';
import { Spin, Result, Button } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { storeThreatData } from 'State/action';
import { IThreat } from 'State/store';
import Link from "next/link";
import dynamic from 'next/dynamic';

const Threat = dynamic(
    () => import('Components/threat'),
    { ssr: false }
);

const getQuery = (queryString: string): string|null => {
    if(!queryString) {
        return null;
    }
    const query = queryString.split('=');

    return query.length > 1 ? query[1].toLowerCase() : null;
 };

interface IProps {
    setStoreData: (data: IThreat) => void
}

export const ThreatPage = (props: IProps): JSX.Element => {
    const { setStoreData } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [query, setQuery] = useState<string|null>(null);
    const router = useRouter();

    useEffect(() => {
        const urlArr = router.asPath.split('?');
        const queryString = urlArr.length > 1 ? urlArr[1] : null;
        const query = queryString ? getQuery(queryString) : null;
        setQuery(query);
        if (!query) {
            setLoading(false);
        } else {
            //fetch data;
            // Make a request for a user with a given ID
            axios.get(`/api/threats?type=${query}`)
                .then(function (response) {
                    // handle success
                    const data = Object.keys(response.data).length > 0 ? response.data : null;
                    setStoreData(data);
                    setLoading(false);
                })
                .catch(function () {
                    // handle error
                    setLoading(false);
                    setError(true);
                });
        }
    }, []);

    const renderErrorState = () => {
        return (
            <div className='center-align' data-test>
                <Result
                    status="500"
                    title="500"
                    subTitle="Sorry, something went wrong."
                    extra={
                        <Button type="primary" key="home">
                            <Link href='/'>
                                <a>Back</a>
                            </Link>
                        </Button>
                    }
                />,
            </div>
        )
    };

    if(loading) {
        return (
            <div className='center-align'>
              <Spin tip="Loading..."></Spin>
            </div>
        )
    }
    return error ? renderErrorState() : <Threat type={query}/>;
};

interface DispatchFromProps {
    setStoreData: (data: IThreat) => void;
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setStoreData: (data: IThreat) => {
            dispatch(storeThreatData(data))
        }
    }
};

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect<null, DispatchFromProps>(
    null,
    mapDispatchToProps
);
// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(ThreatPage);

export default ConnectedComponent;
