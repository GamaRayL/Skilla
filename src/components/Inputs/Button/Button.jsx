import "./styles.module.css";

const STYLES = [
  "btn--primary--contained",
  "btn--primary--outlined",
  "btn--primary--text",
  "btn--warning--contained",
  "btn--warning--outlined",
  "btn--warning--text",
  "btn--fine--contained",
  "btn--fine--outlined",
  "btn--fine--text",
  "btn--success--contained",
  "btn--success--outlined",
  "btn--success--text",
];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
