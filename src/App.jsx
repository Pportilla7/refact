import React from 'react';
import Header from './top';
import Footer from './footer';
import EmployeeList from './lista';
import Calculator from './calculadora';
import './App.css';

const App = () => {
  const employees = [
    { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
    { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
    // ...otros empleados
  ];

  return (
    <div>
      <Header />
      <main>
        <EmployeeList employees={employees} />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
