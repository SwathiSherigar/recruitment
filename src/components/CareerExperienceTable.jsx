import React, { useState } from 'react';

const CareerExperienceTable = () => {
  const initialRow = { organization: '', fromDate: '', toDate: '', experience: '', designation: '' };
  const [experienceData, setExperienceData] = useState([initialRow]);

  const handleChange = (e, rowIndex, field) => {
    const { value } = e.target;
    const updatedData = [...experienceData];
    updatedData[rowIndex][field] = value;
    setExperienceData(updatedData);
  };

  const addRow = (count = 1) => {
    setExperienceData(prevData => {
      const newRows = Array.from({ length: count }, () => ({ ...initialRow }));
      return [...prevData, ...newRows];
    });
  };

  const removeRow = rowIndex => {
    setExperienceData(prevData => prevData.filter((row, index) => index !== rowIndex));
  };

  const handleAddRowClick = (e) => {
    e.preventDefault(); // Prevent form submission
    addRow();
  };

  return (
    <div>
      <h3>Career Experience Details</h3>
      <table>
        
        <tbody>
          {experienceData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="text"
                  value={row.organization}
                  onChange={e => handleChange(e, rowIndex, 'organization')}
                  placeholder="Organization/Institution worked"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.fromDate}
                  onChange={e => handleChange(e, rowIndex, 'fromDate')}
                  placeholder="dd-mm-yyyy"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.toDate}
                  onChange={e => handleChange(e, rowIndex, 'toDate')}
                  placeholder="dd-mm-yyyy"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.experience}
                  onChange={e => handleChange(e, rowIndex, 'experience')}
                  placeholder="Experience (Yrs)"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.designation}
                  onChange={e => handleChange(e, rowIndex, 'designation')}
                  placeholder="Designation Held"
                />
              </td>
              <td>
                <button onClick={() => removeRow(rowIndex)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRowClick}>Add Row</button>
    </div>
  );
};

export default CareerExperienceTable;
