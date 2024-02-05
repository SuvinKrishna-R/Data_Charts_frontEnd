import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getTableDetails } from '../service/allApi';


function Tables() {

    const[tableDatas,setTableDatas]=useState([])

    const tableInput=async()=>{
        const {data}=await getTableDetails()
        console.log(data);
        setTableDatas(data)
    }
    useEffect(()=>{
        tableInput()
    },[])

  return (
    <div className='container' >
        <div>
        <h3 className='mt-5'>Welcome to Table</h3>
         <Table striped bordered hover variant="dark" className='mt-5' >
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>

      {tableDatas.length>0?tableDatas.map((i=>
      <tbody>
      <tr>
        <td>{i?.id}</td>
        <td>{i?.name}</td>
        <td>{i?.quantity}</td>
        <td>{i?.price}</td>
      </tr>
      </tbody>
      )):
        <div>
            <p>NO DATA</p>
        </div>
      }
      
        </Table>
    </div>
    </div>
  )
}

export default Tables