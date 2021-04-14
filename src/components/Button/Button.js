import React from 'react';
import styles from './Button.scss';

const Button = ({variant = '', onClick, ...otherProps}) => {
  const onClickButton = () => {
    const warning = variant.split(' ').find(singleVariant => singleVariant === 'warning');

    if (warning) {
      if (window.confirm('Do you want to cancel?')){
        onClick();
      }
    } else {
      onClick();
    }
  }
  
  return (
  <button 
    {...otherProps} 
    onClick={onClickButton}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
  );
};

export default Button;
