import { useState } from "react";
import employeesData from "../../data/employees.json";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [sortOrder, setSortOrder] = useState("desc");

  const sortedEmployees = employeesData?.employees?.sort((a, b) => {
    if (sortOrder === "desc") {
      return b.piv - a.piv;
    }
    return a.piv - b.piv;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="employee-list">
      <div className="heading">
        <h3>Employee Perfomance</h3>
        <button onClick={toggleSortOrder}>
          Sort Perfomance
          {sortOrder === "desc" ? " Low To High" : " High To Low"}
        </button>
      </div>
      <ul>
        {sortedEmployees.map((employee) => (
          <li key={employee.employeeId}>
            <div className="employee-details">
              <div className="employee-name">{employee.fullName}</div>
              <div className="employee-role">{employee.role}</div>
              <div className="employee-id">{employee.employeeId}</div>
            </div>
            <div className="employee-piv">{employee.piv}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
