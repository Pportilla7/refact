import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div className="envoltura">
      <h2>Lista de Empleados</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <p>Nombre: {employee.name}</p>
            <p>Apellidos: {employee.lastName}</p>
            <p>Hobbies: {employee.hobbies.join(', ')}</p>
            <p>Edad: {employee.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
