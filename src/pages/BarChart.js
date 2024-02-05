
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';
import { getBarChartDetails } from '../service/allApi';


function BarChart() {

    const[month,setMonth]=useState([])
    const[value,setValue]=useState([])

    const barChartInput=async()=>{
        const {data}=await getBarChartDetails()
        console.log(data);
        const xMonth=[]
        const yValue=[]
        for(let i=1;i<data.length;i++){
            xMonth.push(data[i].x)
            yValue.push(data[i].y)
        }
        console.log(xMonth);
        console.log(yValue);
        setMonth(xMonth)
        setValue(yValue)
    }

    useEffect(()=>{
        barChartInput()
    },[])
  return (
    <div className='mt-3 container'>
        <Chart
            type='bar'
            width='100%'
            height={550}
            style={{marginTop:'50px'}}
            

            series={[
                {name:'products',
                data:value}
            ]}
            options={{
                title:{ text:'Student Barchart',style:{fontSize:'30px',color:'red'}},
                subtitle:{ text:'Student Barchart',style:{fontSize:'15px',color:'black'}},
                xaxis:{
                    title:{text:'Student Details' },
                    categories: month
                }
                
             } }

            >

        </Chart>
    </div>
  )
}

export default BarChart