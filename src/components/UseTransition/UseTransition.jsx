import { useTransition, animated } from "@react-spring/web";

const DATA = [1, 2, 3, 4];

const UseTransition = () => {
  const transition = useTransition(DATA, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <h2>UseTransition</h2>
      <br />
      {transition((styles, item) => (
        <animated.div
          style={{
            ...styles,
            fontSize: "50px",
          }}
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
};

export default UseTransition;
