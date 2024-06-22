import React from 'react';

const FormSummary = ({ data }) => (
  <div className="form-details">
    <h2>Form Summary</h2>
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Age: {data.age}</p>
    <p>Attending with guest: {data.attendingWithGuest ? 'Yes' : 'No'}</p>
    {data.attendingWithGuest && <p>Guest Name: {data.guestName}</p>}
  </div>
);

export default FormSummary;