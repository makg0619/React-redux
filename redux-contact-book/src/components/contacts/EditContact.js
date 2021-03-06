import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactAction';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((state)=> state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=> {
    if(contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getContact(id))
  }, [contact]);

  const onUpdateConact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {name,
      phone,
      email});
    dispatch(updateContact(update_contact));
    navigate('/');
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={e => onUpdateConact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditContact;