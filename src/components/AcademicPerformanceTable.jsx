import React, { useState } from 'react';

const AcademicPerformanceTable = () => {
  const [academicData, setAcademicData] = useState({
    SSLC: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' },
    PUC: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' },
    BE: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' },
    MTech: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' },
    PhD: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' },
    AnyOther: { qualification: '', specialization: '', university: '', institute: '', yearOfPassing: '', percentage: '' }
  });

  const handleChange = (e, field, category) => {
    const { name, value } = e.target;
    setAcademicData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value
      }
    }));
  };

  return (
    <div>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>Qualification</th>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>Specialization</th>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>University</th>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>Institute and place studied</th>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>Year of passing</th>
            <th style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(academicData).map((category, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}>{category}</td>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}><input type="text" name="specialization" value={academicData[category].specialization} onChange={(e) => handleChange(e, 'specialization', category)} /></td>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}><input type="text" name="university" value={academicData[category].university} onChange={(e) => handleChange(e, 'university', category)} /></td>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}><input type="text" name="institute" value={academicData[category].institute} onChange={(e) => handleChange(e, 'institute', category)} /></td>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}><input type="text" name="yearOfPassing" value={academicData[category].yearOfPassing} onChange={(e) => handleChange(e, 'yearOfPassing', category)} /></td>
              <td style={{ border: '1px solid black', paddingLeft: '8px', paddingRight: '8px' }}><input type="text" name="percentage" value={academicData[category].percentage} onChange={(e) => handleChange(e, 'percentage', category)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcademicPerformanceTable;
