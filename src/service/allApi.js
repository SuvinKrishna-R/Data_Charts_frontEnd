import { BASE_URL } from "./baseUrl";
import { commonStructure } from "./commonStructure";



export const getDataDetails=async()=>{
    return await commonStructure('GET',`${BASE_URL}/api/pie-chart`,"")
}


// table
export const getTableDetails=async()=>{
    return await commonStructure('GET',`${BASE_URL}/api/table`,"")
}

// line graph
export const getLineGraphDetails=async()=>{
    return await commonStructure('GET',`${BASE_URL}/api/graph`,"")
}

// bar chart
export const getBarChartDetails=async()=>{
    return await commonStructure('GET',`${BASE_URL}/api/graph`,"")
}

// donut chart
export const getDonutDataDetails=async()=>{
    return await commonStructure('GET',`${BASE_URL}/api/pie-chart`,"")
}

