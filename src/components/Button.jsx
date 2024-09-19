import { motion } from "framer-motion";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonBaseClasses =
    "button relative inline-flex items-center justify-center h-11 transition-colors duration-300 ease-in-out hover:text-color-1 focus:outline-none ";
  
  const colorClasses = white ? "text-n-8" : "text-n-1";
  const paddingClasses = px || "px-7";
  const combinedClasses = `${buttonBaseClasses} ${colorClasses} ${paddingClasses} ${className || ""}`;
  const spanClasses = "relative z-10";

  // Define Framer Motion variants for animations
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const renderButton = () => (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      aria-label={children}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.button>
  );

  const renderLink = () => (
    <motion.a
      href={href}
      className={combinedClasses}
      aria-label={children}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
