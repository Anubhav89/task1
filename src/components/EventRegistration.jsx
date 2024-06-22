import React from "react";
import useForm from "../hooks/useForm";
import FormDetails from "./FormDetails";

const initialState = {
  name: "",
  email: "",
  age: "",
  attendingWithGuest: false,
  guestName: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) errors.name = "Name is required";

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if (isNaN(values.age) || Number(values.age) <= 0) {
    errors.age = "Age must be positive number";
  }

  if (values.attendingWithGuest && !values.guestName) {
    errors.guestName = "Guest name is required";
  }
  return errors;
};

const EventRegistrationForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    initialState,
    validate
  );

  return (
    <div className="form-container">
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            name="age"
            id="age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-group checkbox">
          <label htmlFor="attendingWithGuest">
            <input
              type="checkbox"
              name="attendingWithGuest"
              id="attendingWithGuest"
              checked={values.attendingWithGuest}
              onChange={handleChange}
            />
            Attending with a guest?
          </label>
        </div>
        {values.attendingWithGuest && (
          <div className="form-group">
            <label htmlFor="guestName">Guest Name : </label>
            <input
              type="text"
              name="guestName"
              id="guestName"
              value={values.guestName}
              onChange={handleChange}
            />
            {errors.guestName && (
              <span className="error">{errors.guestName}</span>
            )}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {isSubmitting && <FormDetails data={values} />}
    </div>
  );
};

export default EventRegistrationForm;
