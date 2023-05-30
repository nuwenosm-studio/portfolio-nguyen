import { useState, useEffect } from 'react';
import { VscChevronDown, VscChromeClose } from "react-icons/vsc";

const Box = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hideAccordionIcon, setHideAccordionIcon] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setActiveIndex(items.map((item, index) => index));
                setHideAccordionIcon(true);
            } else {
                setActiveIndex(0);
                setHideAccordionIcon(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [items]);

    const onBoxClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    

  const renderItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={index} className={isActive ? "box_active" : "box"}>
        <div className="box_header" >
          <div className="box_label">{item.label}</div>
          <div className="accordion_icon" onClick={() => onBoxClick(index)}>
            {hideAccordionIcon ? null : isActive ? (
              <VscChromeClose fontSize="20px" />
            ) : (
              <VscChevronDown fontSize="20px" />
            )}
          </div>
        </div>

        <div className="box_body">
          <div className="box_title">{item.title}</div>
          <div className="box_content">{item.content}</div>
        </div>
      </div>
    );
  });

  return <div className="box_container">{renderItems}</div>;
};

export default Box;