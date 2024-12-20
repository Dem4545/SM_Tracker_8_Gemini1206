
    import React, { useState, useEffect } from 'react';

    function EmployeeDashboard() {
      const [employees, setEmployees] = useState([]);

      useEffect(() => {
        const fetchEmployees = async () => {
          const response = await fetch('/api/employees');
          const data = await response.json();
          setEmployees(data);
        };

        fetchEmployees();
      }, []);

      return (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>SICIM Security Department</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', width: '30%' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>Total Employees</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{employees.length}</div>
            </div>
            <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', width: '30%' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>POB Status: IN</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {employees.filter((e) => e.data.arrival && !e.data.departure).length}
              </div>
            </div>
            <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', width: '30%' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>POB Status: OUT</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {employees.filter((e) => e.data.departure).length}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', margin: '0 0 10px 0' }}>Employee Records</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <input type="text" placeholder="Search employees..." style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                  Filter
                </button>
                <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                  Import Excel
                </button>
                <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                  Export Excel
                </button>
                <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                  + Add Employee
                </button>
              </div>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
            <thead>
              <tr style={{ backgroundColor: '#333' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>No#</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Nationality</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Passport</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Position</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Arrival</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Departure</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>POB</th>
                <th style={{ padding