import React from 'react';
import PropTypes from 'prop-types';
import './PageLoaderOverlay.style.scss';

const classNames = active => `page-loader-overlay${active ? ' active' : ''}`;

const PageLoaderOverlay = ({
  active,
}) => React.createElement(
  'div',
  { className: classNames(active) },
  React.createElement(
    'div',
    { className: 'page-loader-overlay-animation' },
    React.createElement(
      'div',
      { className: 'spinner-wrapper' },
      React.createElement(
        'div',
        { className: 'spinner' },
        React.createElement('div', { className: 'spinner-item' }),
        React.createElement('div', { className: 'spinner-item' }),
        React.createElement('div', { className: 'spinner-item' }),
        React.createElement('div', { className: 'spinner-item' }),
        React.createElement('div', { className: 'spinner-item' }),
      ),
    ),
  ),
);

PageLoaderOverlay.propTypes = {
  active: PropTypes.bool,
};

export default PageLoaderOverlay;
