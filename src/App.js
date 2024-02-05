import { Route, Routes } from 'react-router-dom';
import './App.css';
import Piechart from './pages/Piechart';
import Table from './pages/Table';
import Graph from './pages/Graph';
import BarChart from './pages/BarChart';
import DonutChart from './pages/DonutChart';





function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/piechart' element={<Piechart></Piechart>}></Route>
        <Route path='/table' element={<Table></Table>}></Route>
        <Route path='/line' element={<Graph></Graph>}></Route>
        <Route path='/bar' element={<BarChart></BarChart>}></Route>
        <Route path='/donut' element={<DonutChart></DonutChart>}></Route>




      </Routes>
    
    </div>
  );
}

export default App;
