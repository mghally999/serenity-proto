import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import { generateId } from '../../../../utils/generate';

const createCheckbox = (data, toggleHandler, isCheckedState) => (
  <Checkbox
    name={data.name}
    handler={toggleHandler}
    key={data.name}
    isChecked={isCheckedState[data.name] ? true : false}
    text={data.text}
  />
);

const CheckboxGroup = (props) => (
  <div className={`${props.className}`}>
    {props.data.map((checkboxData) => createCheckbox(checkboxData, props.toggleHandler, props.isCheckedState))}
  </div>
);

const Checkbox = (props) => {
  const { name, text, isChecked, handler } = props;
  const id = generateId();
  return (
    <div className="Checkbox">
      <label htmlFor={id} className={`Checkbox__label ${props.className}`}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handler(name);
          }}
        />
        {text}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  handler: PropTypes.func,
  className: PropTypes.string,
};

CheckboxGroup.propTypes = {
  data: PropTypes.array,
  toggleHandler: PropTypes.func,
  isCheckedState: PropTypes.object,
  className: PropTypes.string,
};

export { Checkbox, CheckboxGroup };
