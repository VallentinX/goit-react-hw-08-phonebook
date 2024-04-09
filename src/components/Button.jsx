/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

function Button({ children, action, type = "button" }) {
  const style = css`
    background: linear-gradient(to left top, #fff, #f06, #f06);
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 6px;

    &:hover,
    &:focus {
      background: linear-gradient(to left top, #f06, #f06, #fff);
    }

    &:active {
      background: linear-gradient(to left top, #f06, #f06, #fff);
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
