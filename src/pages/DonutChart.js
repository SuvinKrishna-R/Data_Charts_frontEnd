import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';
import { Row,Col } from 'react-bootstrap';
import { getDonutDataDetails } from '../service/allApi';

function DonutChart() {
    const[donutChartLabel,setDonutChartLabel]=useState([])
    const[donutChartValue,setDonutChartValue]=useState([])


    const donutChartDatass=async()=>{
        const {data}=await getDonutDataDetails();
        console.log(data);
        // setdonutChart(data)
        let sLabel=[]
        let sValue=[]
// console.log(data.length);
     for(let i=0;i<data.length;i++){
        sLabel.push(data[i].label)
        
        sValue.push(data[i].value)
     }
     
     setDonutChartLabel(sLabel)
     setDonutChartValue(sValue)

    //  console.log(setdonutChartLabel);
    }

    useEffect(()=>{
        donutChartDatass()
    },[])


  return (
    <div className='mt-5 container'>
            <h3>Welcome to donut chart</h3>

<Row>
    <Col md={12} lg={12} sm={12}>

    
   
    <Chart 
    type='donut'
    width='100%'
    height={550}

    
     series={donutChartValue}
   

     
     
     options={{

        title:{text:'Student donutchart', style:{fontSize:'30px',color:'red'}},
        subtitle:{text:'Student donutchart', style:{fontSize:'15px',color:'black'}},


        labels:donutChartLabel,
    

        noData:{text:'No Data'}

        // color:['red','yellow','violet','black','white']


    }}>
    

    

</Chart>

    </Col>
    
    </Row>    

    </div>
  )
}

export default DonutChart






    
    

   

