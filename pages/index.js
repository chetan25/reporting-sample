import Head from 'next/head';
import Link from 'next/link';
import 'Assets/home.less';
import { PageHeader,  Table, Tag } from 'antd';

//dummy column definition for the table
const columns = [
    {
        title: 'Threat',
        dataIndex: 'threat',
        key: 'threat',
    },
    {
        title: 'Severity',
        key: 'severity',
        dataIndex: 'severity',
        render: tag => (
            <Tag color={tag.color}>
                {tag.title.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (record) => (
            <span>
                <Link href={{pathname: 'threats', query: {type: `${record.threat}`}}}>
                     <a style={{marginRight: 16}}>Details</a>
                </Link>
            </span>
        ),
    }
];

//dummy data
const data = [
    {
        key: 1,
        threat: 'Ransomware',
        severity: {title: 'High', color: 'red'},
    },
];

const Home = () => (
  <div className="container">
      <Head>
          <title>Cisco Umbrella</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className="title">
              <PageHeader
                  className="site-page-header"
                  title="Cisco Umbrella Reporting"
              />
          </div>

          <div className='home-content'>
              <Table columns={columns} dataSource={data} />
          </div>
      </main>

      <footer>
      </footer>
  </div>
);

export default Home
