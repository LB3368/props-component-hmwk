import React from "react";
import "./EmployeeCard.css";

function Card({ employee }) {

  return (
    <div className="col row-cards">
      <div className="Card">
        <h1 className="Name">
          {employee.firstName} {employee.lastName}
        </h1>
        <hr></hr>
        <div className="data">
        <div className="dataRow">
          <small className="dataType">Role | </small>
          <h3 className="dataCol"> {employee.role}</h3>
        </div>
        <br/>
        <div className="dataRow">
          <small className="dataType">Pronouns | </small>
          <h3 className="dataCol"> {employee.pronouns}</h3>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Since | </small>
          <h3 className="dataCol"> {employee.since}</h3>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Email | </small>
          <h4 className="dataCol"> {employee.email}</h4>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Work Place |</small>
          <h3 className="dataCol"> {employee.workPlace}</h3>
          </div>


        {/* <h3><small>Role | </small>{employee.role}</h3>
        <h3><small>Pronouns | </small>{employee.pronouns}</h3>
        <h3><small>Since | </small>{employee.since}</h3>
        <h3><small>Email | </small>{employee.email}</h3>
        <h3><small>ID | </small>{employee.employeeID}</h3>
        <h4><small>Work Place |</small>{employee.workPlace}</h4> */}
        </div>
        </div>
    </div>
  );
}

export default Card;






/*import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { // it's probably easier to not destructure for an example like this, but it's just for practice
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
            <img
                style={{ maxWidth: "60px"}}
                className="rounded-full shadow-md border border-gray-300"
                src={image}
                alt="employee"
            />
            <p className="font-bold text-md">{name}</p>
            <p>{dept}</p>
            <p className="text-blue-500">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeCard;*/