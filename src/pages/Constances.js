import React from 'react';

function Constances() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}
         >Constances</h1>
      <div style={{ marginBottom: '20px' }}>
      <select style={{ marginRight: '18px', padding: '8px', width: '20%', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option value="">Filter by Distert</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
       <input type="text" placeholder="Search by Booth Name" style={{ marginRight: '18px', padding: '8px', width: '20%', borderRadius: '4px', border: '1px solid #ccc' }} />  
       <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Search</button> 
      </div>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>SNO</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Constances Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Chendragire</td>
           
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tirupati</td>
           
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Kadapa</td>
           
          </tr>
        </tbody>
      </table>
      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Add new</button>
    </div>
  );
}

export default Constances;
