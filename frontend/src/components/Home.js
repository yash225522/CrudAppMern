import React from "react";

export const Home = () => {
  return (
    <div className="mt-5 ">
      <div className="container">
        <div className="add_btn mb-2">
          <button className="btn btn-primary">Add Business Card</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">Designation</th>
              <th scope="col">Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Yash Gupta</td>
              <td>yash225522@gmail.com</td>
              <td>Software Developer</td>
              <td>7845123659</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
