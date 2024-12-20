import React, { useState, useEffect } from 'react';

    function VisitorRequest() {
      const [visitors, setVisitors] = useState([]);
      const [name, setName] = useState('');
      const [purpose, setPurpose] = useState('');

      useEffect(() => {
        const fetchVisitors = async () => {
          const response = await fetch('/api/visitors');
          const data = await response.json();
          setVisitors(data);
        };

        fetchVisitors();
      }, []);

      const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, purpose }),
        });

        if (response.ok) {
          const newVisitor = await response.json();
          setVisitors([...visitors, newVisitor]);
          setName('');
          setPurpose('');
          alert('Visitor added successfully.');
        } else {
          alert('Failed to add visitor.');
        }
      };

      const handleDeparture = async (visitorId) => {
        const response = await fetch(`/api/visitors/${visitorId}/departure`, {
          method: 'PUT',
        });

        if (response.ok) {
          const updatedVisitors = visitors.map((visitor) =>
            visitor.ref['@ref'].id === visitorId
              ? { ...visitor, data: { ...visitor.data, departure: new Date().toISOString() } }
              : visitor
          );
          setVisitors(updatedVisitors);
          alert('Visitor departure time updated successfully.');
        } else {
          alert('Failed to update visitor departure time.');
        }
      };

      return (
        <div>
          <h2>Visitor Request</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="purpose">Purpose:</label>
              <input type="text" id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} required />
            </div>
            <button type="submit">Submit</বধ>
          </form>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Purpose</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor) => (
                <tr key={visitor.ref['@ref'].id}>
                  <td>{visitor.ref['@ref'].id}</td>
                  <td>{visitor.data.name}</td>
                  <td>{visitor.data.purpose}</td>
                  <td>{visitor.data.arrival}</td>
                  <td>{visitor.data.departure}</td>
                  <td>
                    <button onClick={() => handleDeparture(visitor.ref['@ref'].id)}>Mark Departure</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    export default VisitorRequest;
