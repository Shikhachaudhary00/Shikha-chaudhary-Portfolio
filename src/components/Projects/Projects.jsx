import React, { useEffect, useRef } from "react";
import Cards from "../Cards/Cards";
import "./Projects.css";
import foodvideo from "../../assets/foodvideo.mp4";
import portfolio from "../../assets/portfolio.mp4";
import animated from "../../assets/animated.mp4";
import img from "../../assets/img.mp4";
import todo from "../../assets/todo.mp4";
import shifra from "../../assets/shifra.png";
import myntra from "../../assets/myntra.mp4";

function Projects() {
    const videoRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 } // Play when at least 50% of the video is visible
        );

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, []);

    return (
        <div id="projects">
            <h1 id="para">DEVELOPMENT SHOWCASE</h1>
            <div className="slider">
                <Cards title="ZWIGGY - Food Delivery Website" video={foodvideo} videoRef={(el) => videoRefs.current[0] = el} />
                <Cards title="PORTFOLIO WEBSITE" video={portfolio} />
                <Cards title="AI ASSISTANT - SHIFRA" image={shifra} />
                <Cards title="ANIMATED WEBSITE" video={animated} videoRef={(el) => videoRefs.current[1] = el} />
                <Cards title="IMAGE GENERATOR USING API" video={img} videoRef={(el) => videoRefs.current[2] = el} />
                <Cards title="MYNTRA CLONE" video={myntra} videoRef={(el) => videoRefs.current[3] = el} />
                <Cards title="TODO-LIST USING REACTJS" video={todo} videoRef={(el) => videoRefs.current[4] = el} />
            </div>
        </div>
    );
}

export default Projects;
