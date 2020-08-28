import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';


function Button({clickFn, value, className, disable}) {
    return (
        <input 
            type="button"
            onClick={clickFn}
            className={classnames('baseButton', className,disable && 'disable')}
            value={value}
            disable={disable.toString()}
        />
    )
}
Button.PropTypes = {
    clickFn: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
    disable: PropTypes.bool
};
Button.defaultProps = {
    clickFn: undefined,
    value: '',
    className: undefined,
    disable: false
}