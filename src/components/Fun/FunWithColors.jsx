import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";
import "./color.css";

// const DATA = [1, 2, 3, 4];
const COLORS = ["ORANGE", "RED", "PURPLE"];

const FunWithColors = () => {
  //   const transition = useTransition(DATA, {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //     config: { duration: 1000 },
  //   });

  const [colors, setColors] = useState(COLORS);

  const transition2 = useTransition(colors, {
    from: { opacity: 0, transform: "perspective(600px) rotateX(180deg)" },
    enter: { opacity: 1, transform: "perspective(600px) rotateX(0deg)" },
    leave: { opacity: 0, transform: "perspective(600px) rotateX(180deg)" },
    config: { duration: 1500 },
  });

  const handleMouseEnter = () => {
    setColors(COLORS);
  };

  const handleMouseLeave = () => {
    setColors([]);
  };

  return (
    <div>
      <h2>Fun With Colors</h2>
      <br />
      <div
        style={{ height: "100px" }}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {transition2((styles, item) => (
          <animated.div
            className={`color ${item}`}
            style={{
              ...styles,
              fontSize: "50px",
            }}
          >
            {item}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default FunWithColors;
