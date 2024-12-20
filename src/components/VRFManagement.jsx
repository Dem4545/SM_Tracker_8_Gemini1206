import React from 'react';

    function VRFManagement() {
      return (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>SICIM Security Department</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', margin: '0 0 10px 0' }}>VRF Records</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}>
                Import Excel
              </button>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}>
                Export Excel
              </button>
              <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                + Add VRF Record
              </button>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
            <thead>
              <tr style={{ backgroundColor: '#333' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>VRF Number</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Issue Date</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Expiry Date</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Days Until Expiry</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Access Level</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Comments</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder row */}
              <tr style={{ backgroundColor: '#222' }}>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>-</td>
                <td style={{ padding: '10px' }}>
                  <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none', marginRight: '5px' }}>
                    Edit
                  </button>
                  <button style={{ backgroundColor: '#666', color: '#fff', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    export default VRFManagement;
