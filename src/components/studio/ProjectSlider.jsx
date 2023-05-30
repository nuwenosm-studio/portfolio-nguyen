import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import ProjectData from "../../data/ProjectData";
import { BsBoxArrowUpRight } from "react-icons/bs";

const sliderVariants = {
    incoming: direction => ({
        x: direction > 0 ? "100%" : "-100%",
        scale: 1.2,
        opacity: 0
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: direction => ({
        x: direction > 0 ? "-100%" : "100%",
        scale: 1,
        opacity: 0.2
    })
}

const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04]
}

const ProjectSlider = () => {
    const [[imageCount, direction], setImageCount] = useState([0, 0]);
    const activeImageIndex = wrap(0, ProjectData.length, imageCount);
    const project = ProjectData[activeImageIndex];

    const swipeToImage = swipeDirection => {
        setImageCount([imageCount + swipeDirection, swipeDirection])
    }

    const dragEndHandler = dragInfo => {
        const draggedDistance = dragInfo.offset.x
        const swipeThreshold = 50
        if (draggedDistance > swipeThreshold) {
            swipeToImage(-1)
        } else if (draggedDistance < -swipeThreshold) {
            swipeToImage(1)
        }
    }

    return (
        <div className="slider_container">
            <div className="slider_item">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={imageCount}
                        style={{
                            backgroundImage: `url(${project.imageUrl})`
                        }}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="exit"
                        transition={sliderTransition}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                        className="slide_bg_img"
                    >
                        <div className="slide_header">
                            <div className="slide_name">
                                <div className="slide_number">{project.number}.</div>
                                <div className="slide_title">{project.title}</div>
                            </div>
                            <div className="slide_view">
                                <BsBoxArrowUpRight />
                            </div>
                        </div>

                        <div className="slide_body">
                            <div className="slide_info">{project.subtitle}</div>
                            <div className="slide_tools">{project.tools}</div>
                        </div>
                    </motion.div>
                    
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProjectSlider
