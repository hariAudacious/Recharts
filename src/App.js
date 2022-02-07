import LineCharts from "./components/LineChart";
import TwoLineChart from "./components/Two-Line-Chart";
import AreaCharts from "./components/Area-Chart"
import BarCharts from "./components/Bar-Chart"
import StackedBars from "./components/Stacked-Bar-Chart"
import PieCharts from "./components/Pie-Chart";
import NavBar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
function App() {
  return(
    <>
    <NavBar/> 
    <Routes>
        <Route path="/" element={<LineCharts/>}/>
        <Route path="/twolinechart" element={<TwoLineChart/>}/>
        <Route path="/areacharts" element={<AreaCharts/>}/>
        <Route path="/barcharts" element={<BarCharts/>}/>
        <Route path="/stackedBars" element={<StackedBars/>}/>
        <Route path="/piecharts" element={<PieCharts/>}/>
    </Routes>
    </>
  );
}

export default App;
