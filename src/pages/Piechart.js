import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';
import { Row,Col } from 'react-bootstrap';
import { getDataDetails } from '../service/allApi';


function Piechart() {

    const[pieChartLabel,setPieChartLabel]=useState([])
    const[pieChartValue,setPieChartValue]=useState([])


    const piechartDatass=async()=>{
        const {data}=await getDataDetails();
        console.log(data);
        // setPieChart(data)
        let sLabel=[]
        let sValue=[]
// console.log(data.length);
     for(let i=0;i<data.length;i++){
        sLabel.push(data[i].label)
        
        sValue.push(data[i].value)
     }
     
     setPieChartLabel(sLabel)
     setPieChartValue(sValue)

    //  console.log(setPieChartLabel);
    }
    

    useEffect(()=>{
        piechartDatass()
    },[])

    // console.log(sLabel);
    // console.log(pieChart);
    // console.log(pieChartLabel);
    // console.log(pieChartValue);
  return (
    <div className='mt-5 container'>
                <h3>Welcome to piechart</h3>

        <Row>
            <Col md={12} lg={12} sm={12}>

            
           
            <Chart 
            type='pie'
            width='100%'
            height={550}

            
             series={pieChartValue}

             
             
             options={{

                title:{text:'Student Piechart', style:{fontSize:'30px',color:'red'}},
                subtitle:{text:'Student piechart', style:{fontSize:'15px',color:'black'}},


                labels:pieChartLabel,

                noData:{text:'No Data'}

                // color:['red','yellow','violet','black','white']


            }}>
            

            

        </Chart>
       
            </Col>
            
            </Row>        
       

    </div>
  )
}

export default Piechart