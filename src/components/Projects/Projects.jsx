import React from 'react'
import Cards from '../Cards/Cards'
import "./Projects.css"
import food from '../../assets/food.png'
import foodvideo from "../../assets/foodvideo.mp4"
import portfolio from '../../assets/portfolio.png'
import animated from '../../assets/animated.mp4'
import img from '../../assets/img.mp4'
import todo from '../../assets/todo.mp4'
import shifra from '../../assets/shifra.png'
import myntra from '../../assets/myntra.mp4'

function Projects() {
    return (
        <div id='projects'>
            <h1 id="para"> DEVELOPMENT SHOWCASE</h1>
            <div className="slider">
                <Cards  title="ZWIGGY - Food Delivery Website " video={foodvideo}/>
                <Cards title=" PORTFOLIO WEBSITE" image={portfolio}/>
                <Cards title=" AI ASSISTANT -SHIFRA" image={shifra}/>
                <Cards title=" ANIMATED WEBSITE  " video={animated}/>
                <Cards title=" IMAGE GENERATOR USING API " video={img}/>
                <Cards title=" MYNTRA CLONE" video={myntra}/>
                <Cards title=" TODO-LIST USING REACTJS" video={todo}/>
            </div>
            
        </div>
    )
}

export default Projects
