"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simpleIcons = _interopRequireDefault(require("simple-icons"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function SimpleIcon({
  name,
  color,
  className
}) {
  const icon = _simpleIcons.default[name];
  if (!icon) return null;
  const iconColor = color ? color : `#${icon.hex}`;
  const style = {
    fill: 'currentColor',
    width: '100%'
  };
  return _react.default.createElement("div", {
    style: { ...style,
      color: iconColor
    },
    dangerouslySetInnerHTML: {
      __html: icon.svg
    },
    className
  });
}

SimpleIcon.propTypes = {
  name: _propTypes.default.string.isRequired,
  color: _propTypes.default.string
};
var _default = SimpleIcon;
exports.default = _default;