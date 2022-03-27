import React from 'react';
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';


const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const {name, phone, email, id} = contact;
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
        <Link to={`/contacts/edit/${id}`}>
          <span className='material-icons'>edit</span>
        </Link>
          <span className='material-icons' onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
      </td>
    </tr>
  )
}

export default Contact