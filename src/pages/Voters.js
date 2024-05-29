import React from 'react';

function Booths() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <select style={{ margin: '10px', padding: '8px', width: '20%', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option value="">Filter by Constance</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{ margin: '10px', padding: '8px', width: '20%', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option value="">Filter by Mandel</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{margin: '10px', padding: '8px', borderRadius: '4px', width: '20%', border: '1px solid #ccc' }}>
          <option value="">Filter by Devision</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{ margin: '10px',padding: '8px', borderRadius: '4px', width: '20%', border: '1px solid #ccc' }}>
          <option value="">Filter by Suchivalyam</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{ margin: '10px',padding: '8px', borderRadius: '4px', width: '20%', border: '1px solid #ccc' }}>
          <option value="">Filter by Booth NO</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{ margin: '10px',padding: '8px', borderRadius: '4px', width: '20%', border: '1px solid #ccc' }}>
          <option value="">Filter by Gender</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <select style={{ margin: '10px',padding: '8px', borderRadius: '4px', width: '20%', border: '1px solid #ccc' }}>
          <option value="">Filter by AGE</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <input type="text" placeholder="Search by Name" style={{ margin : '10px', padding: '8px', width: '20%', borderRadius: '4px', border: '1px solid #ccc' }} /> 
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Search</button>  
      </div>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>SNO</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Garden Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Gender</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Adress</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Garden Name 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Age 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gender 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adress 1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name 2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Garden Name 2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Age 2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Garden 2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adress 2</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name 3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Garden Name 3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Age 3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Garden 3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adress 3</td>
          </tr>
        </tbody>
      </table>
      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Add new</button>
    </div>
  );
}

export default Booths;
