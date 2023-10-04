import { motion } from "framer-motion";

const Motion = (Component) => {
  return function Transition() {
    return (
          <motion.div
            initial={{ y: 500 }}
            animate={{
              y: 0,
              transition: { duration: 1, type: "spring" },
            }}
            exit={{
              y: -500,
              transition: { duration: 0.5, type: "spring", ease: "easeOut" },
            }}
          >
            <Component />
          </motion.div>
    );
  };
};

export default Motion;
