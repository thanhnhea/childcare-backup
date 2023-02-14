import React from "react";

const UserList = () =>{
    return(
        <div classNameName="container p-2 m-5">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-uppercase mb-0">Users</h5>
                        <button type="button" className="btn btn-primary mt-3">Add New User</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table  table-bordered no-wrap user-table m-5">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Occupation</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Added</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Role</th>
                              <th scope="col" className="border-0 text-uppercase font-medium">Manage</th>
                            </tr>
                          </thead>
                         <tbody>
                            <tr>
                              <td className="pl-4">1</td>
                              <td>
                                  <h5 className="font-medium mb-0">Daniel Kristeen</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">15 Mar 1988</span>
                                  <span className="text-muted">10: 55 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4">2</td>
                              <td>
                                  <h5 className="font-medium mb-0">Emma Smith</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">15 Mar 1855</span>
                                  <span className="text-muted">10: 00 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4">3</td>
                              <td>
                                  <h5 className="font-medium mb-0">Olivia Johnson</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">17 Aug 1988</span>
                                  <span className="text-muted">12: 55 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4">4</td>
                              <td>
                                  <h5 className="font-medium mb-0">Isabella Williams</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">26 Mar 1999</span>
                                  <span className="text-muted">10: 55 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4">5</td>
                              <td>
                                  <h5 className="font-medium mb-0">Sophia Jones</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">16 Aug 2001</span>
                                  <span className="text-muted">10: 55 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4">6</td>
                              <td>
                                  <h5 className="font-medium mb-0">Charlotte Brown</h5>
                                  <span className="text-muted">Texas, Unitedd states</span>
                              </td>
                              <td>
                                  <span className="text-muted">Visual Designer</span>
                                  <span className="text-muted">Past : teacher</span>
                              </td>
                              <td>
                                  <span className="text-muted">daniel@website.com</span>
                                  <span className="text-muted">999 - 444 - 555</span>
                              </td>
                              <td>
                                  <span className="text-muted">15 Mar 1988</span>
                                  <span className="text-muted">10: 55 AM</span>
                              </td>
                              <td>
                                <select className="form-control category-select" id="exampleFormControlSelect1">
                                  <option>Modulator</option>
                                  <option>Admin</option>
                                  <option>User</option>
                                  <option>Subscriber</option>
                                </select>
                              </td>
                              <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-eye" aria-hidden="true"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                              </td>
                            </tr>
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