import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact'

const Contacts = () => {
  const contacts = useSelector(state => state.contact.contacts )
  return (
    <table className="table shadow">
        <thead>
          <tr>
            <th>
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
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact)=> (
              <Contact contact={contact} />
            ))
          }
        </tbody>
      </table>
  )
}

export default Contacts