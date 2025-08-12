import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e?.target?.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-quicksand font-medium bg-edittext-1 text-edittext-1 placeholder-edittext-1 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-button-1 focus:border-transparent transition-all duration-200';
  
  const inputClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : 'flex-1'}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  type: PropTypes?.string,
  disabled: PropTypes?.bool,
  fullWidth: PropTypes?.bool,
  className: PropTypes?.string,
};

export default EditText;