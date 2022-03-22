import React from 'react';
import Avatar from 'react-avatar';

const contact = ({contact}) => {
  const {name, phone, email} = contact;
  return (
    <tr>
      <div className="custom-control custom-checkbox">
        <input
          id="selectAll"
          type="checkbox"
          className="custom-control-input"
        />
        <label
          htmlFor="selectAll"
          className="custom-control-label"
        ></label>
      </div>
      <td><Avatar className='me-2' name={name} size="45" round={true} />{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='actions'>
        <a href="#">
          <span className='material-icons'>edit</span>
        </a>
        <a href="#">
          <span className='material-icons'>remove_circle</span>
        </a>
      </td>
    </tr>
  )
}

export default contact