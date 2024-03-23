import React, { useState } from 'react';

const SubjectsHandledInput = () => {
  const [subjectsData, setSubjectsData] = useState([
    { id: 1, subject: '' },
    { id: 2, subject: '' },
    { id: 3, subject: '' },
    { id: 4, subject: '' },
    { id: 5, subject: '' },
    { id: 6, subject: '' }
  ]);

  const handleChange = (e, id) => {
    const { value } = e.target;
    setSubjectsData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, subject: value } : item))
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      {subjectsData.map(subject => (
        <div key={subject.id} style={{ marginBottom: '10px' }}>
            <lable style={{ marginRight: '10px' }}>{subject.id}</lable>
            
          <input
            type="text"
            value={subject.subject}
            onChange={e => handleChange(e, subject.id)}
            style={{ width: '400px', height: '30px' }}
           
          />
        </div>
      ))}
    </div>
  );
};

export default SubjectsHandledInput;
