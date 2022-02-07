import React from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";
const  NavBar = () =>{
    return(
        <div className={styles.MenuStyle}>
             <ul>
                <li><Link to="/">Line-Charts</Link></li>
                <li><Link to="/twolinechart">Two-Line-Chart</Link></li>
                <li><Link to="/areacharts">Area-Charts</Link></li>
                <li><Link to="/barcharts">Bar-Charts</Link></li>
                <li><Link to="/stackedBars">Stacked-Bars</Link></li>
                <li><Link to="/piecharts">Pie-Charts</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
