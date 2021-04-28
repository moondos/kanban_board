import React from 'react';
import './index.css';

class Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="item__input">
        <input
          className="input"
          type="text"
          value={value}
          onChange = {onChange}
          placeholder = "Write new issue"
        />
      </div>
    );
  }
}

export default Input;
