import React from "react";
import { ChevronRight } from "lucide-react";

const Button = ({
  text = "Button",
  onClick,
  className = "",
  showIcon = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {text}

      {showIcon && (
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;