import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const Edit = () => {

  const [ data, setData ] = useState({
    name: "",
    email: "",
    designation: "",
    age: "",
    phone: "",
    about: "",
  });
  const handleFormData = (e) =>{
    const {name, value} = e.target;
    setData((preData)=>({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container mt-1">
      <NavLink to="/">home</NavLink>
      <div className="row justify-content-center mt-2">
        <div className="col-lg-6">
          <div className="p-4 bg-danger text-black rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.name}
                  name="name"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.email}
                  name="email"
                  id="email"
                  aria-describedby="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.designation}
                  name="designation"
                  id="designation"
                  aria-describedby="designation"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.age}
                  name="age"
                  id="age"
                  aria-describedby="age"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.phone}
                  name="phone"
                  id="phone"
                  aria-describedby="phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="about" className="form-label">
                  About You
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleFormData}
                  value={data.about}
                  name="about"
                  id="about"
                  aria-describedby="about"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
