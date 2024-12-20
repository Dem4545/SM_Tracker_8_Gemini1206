import React, { useState, useEffect } from 'react';

    function ArrivalDeparture() {
      const [arrivals, setArrivals] = useState([
        { time: '10:25', name: 'PRADHAN AKSHYA KUMAR - Indian (New mobilization) Arrival with Sicim\'s', location: 'WQ' },
        { time: '14:50', name: 'YAACOUB AKIKI CHARBEL - Lebanese (New mob) IRAQI LOI. (Mission)', location: 'WQ' },
        { time: '10:55', name: 'PASHENKO MIKHAIL. Arrival with Sicim\'s', location: 'WQ' },
        { time: '06:50', name: 'SAADALLAH OMAR', location: 'WQ' },
      ]);

      const [departures, setDepartures] = useState([
        { time: '11:55', name: 'EK KHAYAT MOUSSA ISSA', location: 'WQ' },
        { time: '15:50', name: 'LOUW JASON GRANT', location: 'WQ' },
        { time: '10:30', name: 'ZEMOUCHI ALI (Mission End/Aesthetic)', location: 'WQ' },
      ]);

      const [schedule, setSchedule] = useState([
        { date: '14.12.2024', time: '', personnelOut: '', workLocation: '', time2: '', personnelIn: '', workLocation2: '' },
        {
          date: '15.12.2024',
          time: '',
          personnelOut: '',
          workLocation: '',
          time2: '14:50',
          personnelIn: 'YAACOUB AKIKI CHARBEL - Lebanese (New mob) IRAQI LOI. (Mission)',
          workLocation2: 'WQ',
        },
      ]);

      return (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>SICIM Security Department</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '5px', width: '48%' }}>
              <h3 style={{ margin: '0 0 10px 0', display: 'flex', alignItems: 'center' }}>
                Tomorrow's Departures
                <span style={{ marginLeft: '10px', fontSize: '16px' }}>✈️</span>
              </h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>{departures.length} people departing</p>
              {departures.map((departure, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{departure.time}</span>
                  <span style={{ fontSize: '14px' }}>{departure.name}</span>
                  <span style={{ fontSize: '14px' }}>{departure.location}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '5px', width: '48%' }}>
              <h3 style={{ margin: '0 0 10px 0', display: 'flex', alignItems: 'center' }}>
                Tomorrow's Arrivals
                <span style={{ marginLeft: '10px', fontSize: '16px' }}>🛬</span>
              </h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>{arrivals.length} people arriving</p>
              {arrivals.map((arrival, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{arrival.time}</span>
                  <span style={{ fontSize: '14px' }}>{arrival.name}</span>
                  <span style={{ fontSize: '14px' }}>{arrival.location}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', margin: '0 0 10px 0' }}>Airport Schedule</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}>
                Import Excel
              </button>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}>
                Export Excel
              </button>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                + Add Schedule
              </button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
              <thead>
                <tr style={{ backgroundColor: '#333' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>DATE</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>TIME</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>PERSONNEL OUT</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>WORK LOCATION</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>TIME2</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>PERSONNEL IN</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>WORK LOCATION2</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#222' : '#333' }}>
                    <td style={{ padding: '10px' }}>{item.date}</td>
                    <td style={{ padding: '10px' }}>{item.time}</td>
                    <td style={{ padding: '10px' }}>{item.personnelOut}</td>
                    <td style={{ padding: '10px' }}>{item.workLocation}</td>
                    <td style={{ padding: '10px' }}>{item.time2}</td>
                    <td style={{ padding: '10px' }}>{item.personnelIn}</td>
                    <td style={{ padding: '10px' }}>{item.workLocation2}</td>
                    <td style={{ padding: '10px' }}>
                      <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '5px' }}>
                        Edit
                      </button>
                      <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default ArrivalDeparture;
