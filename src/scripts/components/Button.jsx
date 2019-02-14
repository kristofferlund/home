import React from 'react';
import PropTypes from 'prop-types';

// Creating small reusable components like this is a great way of ensuring that the
// branding stays correct throughout the project.
const Button = ({ onClick, text }) => (
	<button className="main-button" type="button" onClick={onClick}>
		{text}
	</button>
);

Button.defaultProps = {
	text: '',
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string,
};

export default Button;