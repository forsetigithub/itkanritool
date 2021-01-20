import React, {FC, useState} from 'react';
import useAxios from 'axios-hooks';

import './Item-list.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, TableToolkitProps, ToolkitContextType } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import ItemTab from './item-tab';

const { SearchBar } = Search;

interface ColumItems {
    pcItemCode:string,
    assetKindCode:string,
    itemNumber:string,
    employeeName:string,
    departmentName:string,
}

const columns = [
    {dataField:"pcItemCode"     , text:"No."     ,sort:true, editable:false},
    {dataField:"assetKindCode"  , text:"資産種別" ,sort:true, editable:false},
    {dataField:"itemNumber"     , text:"備品番号" ,sort:true, editable:false},
    {dataField:"employeeName"   , text:"従業員名" ,sort:true, editable:false},
    {dataField:"departmentName" , text:"部署"     ,sort:true, editable:false}
];

const expandRow = {
    renderer:(row:ColumItems) => (
        <div>
            <ItemTab />
        </div>
    )

};

const ItemList: FC = () => {

    const [{data, loading, error}, refetch] = useAxios(
        'http://localhost:5000/pcitems'
        // 'http://192.168.1.80:5003/PCItems'
    );
    
    if (loading) return <p>loading...</p>
    if (error) return <p>Error!</p>



    const tableCellStyle = {
        borderWidth: "thin",
        borderStyle: "solid"
    };

    const rowEvents:any = {
        onClick: (e:any, row:any,rowIndex:number) =>  {
            console.log(row);
        }
    };

    const pageOptions:any = {
        
    };

    const afterSearch:any = (newResult:any) => {
        console.log(newResult);
    };

    // const onRowDoubleClickHandler = (index_: Index) => {
    //     console.log(data[index_.index]);
    // };

    // const onRowGetterHandler = (index_: Index):any => {
    //    return data[index_.index]; 
    // };

    return(
        <div className="item-list-table">
            <ToolkitProvider
                keyField="pcItemCode"
                data={data}
                columns={columns}
                search> 
            {
                props => (
                    <div>
                        <h3>検索</h3>
                        <SearchBar { ...props.searchProps } />
                        <hr />
                        <BootstrapTable 
                            rowEvents={rowEvents}
                            pagination={ paginationFactory(pageOptions)}
                            bootstrap4={true}
                            bordered={true}
                            expandRow={expandRow}
                            { ...props.baseProps }                            
                        />
                    </div>    
                )
            }
              
            </ToolkitProvider>
         </div>
    );

}

export default ItemList;