var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import likely from 'ilyabirman-likely';

const { string, node, oneOf } = PropTypes;

const Item = (_ref) => {
  let { type, children } = _ref,
      rest = _objectWithoutProperties(_ref, ['type', 'children']);

  return React.createElement(
    'div',
    _extends({}, rest, { className: `${type}` }),
    children
  );
};
export { Item };
Item.propTypes = {
  children: node,
  type: oneOf(['facebook', 'twitter', 'gplus', 'vkontakte', 'pinterest', 'odnoklassniki', 'telegram', 'linkedin']).isRequired
};

export const Facebook = props => React.createElement(
  Item,
  { type: 'facebook' },
  props.children
);

Facebook.propTypes = {
  children: node
};

export const Twitter = ({ children, via }) => React.createElement(
  Item,
  { type: 'twitter', 'data-via': via },
  children
);
Twitter.propTypes = {
  children: node,
  via: string
};

export const Gplus = ({ children }) => React.createElement(
  Item,
  { type: 'gplus' },
  children
);
Gplus.propTypes = {
  children: node
};

export const Vkontakte = ({ children }) => React.createElement(
  Item,
  { type: 'vkontakte' },
  children
);
Vkontakte.propTypes = {
  children: node
};

export const Pinterest = ({ children, media }) => React.createElement(
  Item,
  { type: 'pinterest', 'data-media': media },
  children
);
Pinterest.propTypes = {
  media: string,
  children: node
};

export const Odnoklassniki = ({ children }) => React.createElement(
  Item,
  { type: 'odnoklassniki' },
  children
);
Odnoklassniki.propTypes = {
  children: node
};

export const Telegram = ({ children, text }) => React.createElement(
  Item,
  { type: 'telegram', 'data-text': text },
  children
);
Telegram.propTypes = {
  text: string,
  children: node
};

export const Linkedin = ({ children }) => React.createElement(
  Item,
  { type: 'linkedin' },
  children
);
Linkedin.propTypes = {
  children: node
};

export default class Likely extends Component {

  componentDidMount() {
    likely.initiate(this.rootEl);
  }

  componentDidUpdate() {
    this.rootEl['likely'] = null;
    likely.initiate(this.rootEl, { forceUpdate: true });
  }

  render() {
    const { skin, size } = this.props;
    const className = 'likely' + (skin !== 'default' ? ` likely-${skin}` : '') + (size !== 'default' ? ` likely-${size}` : '');

    return React.createElement(
      'div',
      { className: className, ref: el => {
          this.rootEl = el;
        } },
      this.props.children
    );
  }
}

Likely.defaultProps = {
  skin: 'default',
  size: 'default'
};

Likely.propTypes = {
  skin: oneOf(['default', 'light']),
  size: oneOf(['small', 'default', 'big']),
  children: node
};