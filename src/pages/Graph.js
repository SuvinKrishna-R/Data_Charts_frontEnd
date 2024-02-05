import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { getLineGraphDetails } from '../service/allApi';



function Graph() {

    const [month,setMonth]=useState([])
    const [value,setValue]=useState([])


        const lineGraphInput=async()=>{
            const {data}=await getLineGraphDetails()
            console.log(data);
            const xMonth=[]
            const yValue=[]
            
            for(let i=0;i<data.length;i++){
                xMonth.push(data[i].x)
                yValue.push(data[i].y)
            }
            console.log(xMonth);
            console.log(yValue);
            setMonth(xMonth)
            setValue(yValue)
        }

        useEffect(()=>{
            lineGraphInput()
        },[])


  return (
    <div className='container' >
    <h3>Welcome to Linechart</h3>

<Row className='mt-5'>
<Col md={12} lg={12} sm={12}>



<Chart 
type='line'
width='100%'
height={550}





 series={[
    {name:'products',
    data:value,
    }
 ]}

 
 
 options={{

    title:{text:'Student Linechart', style:{fontSize:'30px',color:'red'}},
    subtitle:{text:'Student Linechart', style:{fontSize:'15px',color:'black'}},

    labels:['ass','bss','css','dss'],
    xaxis:{
        title:{text:'Student Details'},
        categories: month
        
        
        },

    noData:{text:'No Data'}

    // color:['red','yellow','violet','black','white']


}}>




</Chart>

</Col>

</Row>        


</div>
  )
}

export default Graph