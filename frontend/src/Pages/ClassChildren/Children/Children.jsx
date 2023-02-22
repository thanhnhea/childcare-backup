import React, { useEffect, useState } from "react";
import "./Children.css";
import { Col, Container, Row } from 'react-bootstrap';
import UserService from "../../../services/user.service";

const Children = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await UserService.getModeratorBoard();
      setData(response.data);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Container className="mt-5 mb-4">
        <Row>
          <h1 className="display-1 mb-5 text-primary text-uppercase">Child Information</h1>
        </Row>
        <Row>
          <Col>
            <table className="table bg-white border">
              <thead className="bg-light">
                <tr>
                  <th>FirtName</th>
                  <th>LastName</th>
                  <th>Status</th>
                  <th>Date of Birth</th>
                  <th>Child's note</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  /**
                   * <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" className="imgc rounded-circle ml-5" />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">John Doe</p>
                          <p className="text-muted mb-0">john.doe@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">Study</p>
                      <p className="text-muted mb-0">HD1</p>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">Active</span>
                    </td>
                    <td>Senior</td>
                    <td>
                      <button type="button" className="btn btn-primary btn-sm btn-rounded">Edit</button>
                    </td>
                  </tr>
                   * 
                   */
                }
                {data.map((item) => (
                  <tr>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">{item.firstName}</span>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">{item.lastName}</span>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">{item.status}</span>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">{item.dob}</span>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline text-success">{item.needs}</span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-sm btn-rounded">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Children;
