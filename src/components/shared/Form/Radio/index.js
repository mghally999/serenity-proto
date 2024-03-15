import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generateId } from '../../../../utils/generate';
import '../Checkbox/Checkbox.scss'; // Import SCSS file

export default class RadioGroup extends Component {
  passPropsToChildren = () => {
    const { children, handleChange, activeIndex } = this.props;
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index: index,
        onChange: handleChange,
        checked: index === activeIndex,
      })
    );
  };

  render() {
    return (
      <div className={`RadioGroup ${this.props.className}`}>
        {this.passPropsToChildren()}
      </div>
    );
  }
}

export const Radio = (props) => {
  const id = generateId();
  return (
    <div className="radio-container"> {/* Add a container for radio button and label */}
      <input
        className="Radio"
        type="radio"
        checked={props.checked}
        name={props.name}
        id={id}
        onChange={() => {
          props.onChange(props.index);
        }}
      />
      <label htmlFor={id} className={props.className}>
        {props.children}
      </label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

RadioGroup.propTypes = {
  activeIndex: PropTypes.number,
  handleChange: PropTypes.func,
  className: PropTypes.string,
};
