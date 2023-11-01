import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const Fun = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  //   const spring = useSpring({
  //     from: { x: 0 },
  //     to: { x: 500 },
  //     config: { duration: 300 },
  //   });

  const [spring2, api] = useSpring(() => ({
    from: {
      x: currentPosition,
    },
    onChange: e => {
      setCurrentPosition(e.value.x);
    },
    config: {
      duration: 2000,
    },
  }));

  const handleMouseEnter = () => {
    api.start({
      from: { x: currentPosition },
      to: { x: 500 },
    });
  };

  const handleMouseLeave = () => {
    api.start({
      from: { x: currentPosition },
      to: { x: 0 },
    });
  };

  return (
    <div className="play">
      <h2>use Spring</h2>
      <br />
      <animated.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...spring2,
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Fun;
