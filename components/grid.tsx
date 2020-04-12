import 'Assets/default.less';
import 'Assets/grid.less';
import { IRow } from 'State/store';
import { Icon, Progress, Pagination } from 'antd';
import { useState } from 'react';

interface IProps<T> {
    title: string;
    data: T;
    pageCount?: number
}

const renderGridRow = (row: IRow, index: number) => {
   return (
       <div key={index}>
           <div className='grid-row m-t-0-5 flex-space-between'>
               <div>
                   { row.icon ? <Icon type={row.icon} style={{ marginRight: '8px' }}/> : null }<a>{row.title}</a></div>
               <div>{row.request}</div>
           </div>
           <div className='grid-progress'>
               <Progress
                   strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                   }}
                   showInfo={false}
                   percent={row.request}
               />
           </div>
       </div>
   )
};

const Grid = <T extends any>(props: IProps<T>) => {
    const { title, data, pageCount = 5 } = props;
    const length = data.length;
    const [displayData, setDisplayData] = useState<T>(data.slice(0, pageCount));
    const [currentPage, setCurrentPage] = useState<number>(1);

    const onChange = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        const start = (page -1) * pageSize!;
        const end = start + pageSize!;
        setDisplayData(data.slice(start, end));
    };

    return (
      <div className='m-a-1'>
          <label>{title}</label>
          <div className='grid-row-header flex-space-between'>
              <div>Identity</div>
              <div>Requests</div>
          </div>
          <div className='m-t-1'>
              {
                  displayData.map((row: IRow, index: number) => {
                     return  renderGridRow(row, index);
                  })
              }
          </div>
          <div className='grid-footer flex-space-between'>
             <div className='m-t-0-5'>
                 <a>View All</a>
             </div>
              <div className='m-t-0-5'>
                  <Pagination
                      simple
                      current={currentPage}
                      defaultPageSize={pageCount}
                      total={length}
                      onChange={onChange}
                  />
              </div>
          </div>
      </div>
    );
};

export default Grid