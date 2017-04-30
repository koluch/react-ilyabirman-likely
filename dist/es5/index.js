'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Linkedin = exports.Telegram = exports.Odnoklassniki = exports.Pinterest = exports.Vkontakte = exports.Gplus = exports.Twitter = exports.Facebook = exports.Item = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ilyabirmanLikely = require('ilyabirman-likely');

var _ilyabirmanLikely2 = _interopRequireDefault(_ilyabirmanLikely);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var string = _propTypes2.default.string,
    node = _propTypes2.default.node,
    oneOf = _propTypes2.default.oneOf;
var Item = function Item(_ref) {
  var type = _ref.type,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['type', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, { className: '' + type }),
    children
  );
};
exports.Item = Item;
Item.propTypes = {
  children: node,
  type: oneOf(['facebook', 'twitter', 'gplus', 'vkontakte', 'pinterest', 'odnoklassniki', 'telegram', 'linkedin']).isRequired
};

var Facebook = exports.Facebook = function Facebook(props) {
  return _react2.default.createElement(
    Item,
    { type: 'facebook' },
    props.children
  );
};

Facebook.propTypes = {
  children: node
};

var Twitter = exports.Twitter = function Twitter(_ref2) {
  var children = _ref2.children,
      via = _ref2.via;
  return _react2.default.createElement(
    Item,
    { type: 'twitter', 'data-via': via },
    children
  );
};
Twitter.propTypes = {
  children: node,
  via: string
};

var Gplus = exports.Gplus = function Gplus(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    Item,
    { type: 'gplus' },
    children
  );
};
Gplus.propTypes = {
  children: node
};

var Vkontakte = exports.Vkontakte = function Vkontakte(_ref4) {
  var children = _ref4.children;
  return _react2.default.createElement(
    Item,
    { type: 'vkontakte' },
    children
  );
};
Vkontakte.propTypes = {
  children: node
};

var Pinterest = exports.Pinterest = function Pinterest(_ref5) {
  var children = _ref5.children,
      media = _ref5.media;
  return _react2.default.createElement(
    Item,
    { type: 'pinterest', 'data-media': media },
    children
  );
};
Pinterest.propTypes = {
  media: string,
  children: node
};

var Odnoklassniki = exports.Odnoklassniki = function Odnoklassniki(_ref6) {
  var children = _ref6.children;
  return _react2.default.createElement(
    Item,
    { type: 'odnoklassniki' },
    children
  );
};
Odnoklassniki.propTypes = {
  children: node
};

var Telegram = exports.Telegram = function Telegram(_ref7) {
  var children = _ref7.children,
      text = _ref7.text;
  return _react2.default.createElement(
    Item,
    { type: 'telegram', 'data-text': text },
    children
  );
};
Telegram.propTypes = {
  text: string,
  children: node
};

var Linkedin = exports.Linkedin = function Linkedin(_ref8) {
  var children = _ref8.children;
  return _react2.default.createElement(
    Item,
    { type: 'linkedin' },
    children
  );
};
Linkedin.propTypes = {
  children: node
};

var Likely = function (_Component) {
  _inherits(Likely, _Component);

  function Likely() {
    _classCallCheck(this, Likely);

    return _possibleConstructorReturn(this, (Likely.__proto__ || Object.getPrototypeOf(Likely)).apply(this, arguments));
  }

  _createClass(Likely, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ilyabirmanLikely2.default.initiate(this.rootEl);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.rootEl['likely'] = null;
      _ilyabirmanLikely2.default.initiate(this.rootEl, { forceUpdate: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          skin = _props.skin,
          size = _props.size;

      var className = 'likely' + (skin !== 'default' ? ' likely-' + skin : '') + (size !== 'default' ? ' likely-' + size : '');

      return _react2.default.createElement(
        'div',
        { className: className, ref: function ref(el) {
            _this2.rootEl = el;
          } },
        this.props.children
      );
    }
  }]);

  return Likely;
}(_react.Component);

exports.default = Likely;


Likely.defaultProps = {
  skin: 'default',
  size: 'default'
};

Likely.propTypes = {
  skin: oneOf(['default', 'light']),
  size: oneOf(['small', 'default', 'big']),
  children: node
};