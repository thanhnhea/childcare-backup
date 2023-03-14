import React, { useState, useEffect } from "react";

const UserList = () => {

  const [users, setUsers] = useState([]);

  // Fetch user data from API
  useEffect(() => {
    fetch("https://example.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div classNameName="container p-2 m-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-uppercase mb-0">Users</h5>
              <button type="button" className="btn btn-primary mt-3">Add New User</button>
            </div>
            <div className="table-responsive">
              <table className="table  table-bordered no-wrap user-table m-3">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 text-uppercase font-medium pl-4">ID</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">First Name</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">Last Name</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">Username</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">Phone</th>
                    <th scope="col" className="border-0 text-uppercase font-medium">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="pl-4">{user.id}</td>
                      <td>          
                        <span className="text-muted">{user.firstName}</span>
                      </td>
                      <td>
                        <span className="text-muted">{user.lastName}</span>
                        
                      </td>
                      <td>
                        <span className="text-muted">{user.username}</span>
                      
                      </td>
                      <td>
                        <span className="text-muted">{user.email}</span>
                    
                      </td>
                      <td>
                        <span className="text-muted">{user.phone}</span>
                    
                      </td>
                      <td>
                        <span className="text-muted">{user.address}</span>
                    
                      </td>
                      
                      <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><a href="!#"><i className="fa fa-eye" aria-hidden="true"></i></a> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><a href="!#"><i className="fa fa-trash"></i></a> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><a href="!#"><i className="fa fa-edit"></i></a> </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;