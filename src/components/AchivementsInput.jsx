import React, { useState } from 'react';

const AchievementsInput = () => {
  const [achievementsData, setAchievementsData] = useState({
    researchPublications: { journals: '', conference: '', national: '', international: '' },
    booksMonograph: '',
    patents: '',
    awards: '',
    anyOtherInformation: '',
    reference: ''
  });

  const handleChange = (e, field, subfield) => {
    const { value } = e.target;
    setAchievementsData(prevData => ({
      ...prevData,
      [field]: typeof prevData[field] === 'object' ? { ...prevData[field], [subfield]: value } : value
    }));
  };

  return (
    <div>
      <h3>Achievements</h3>
      <table>
        <tbody>
          <tr>
            <td>Research Publications</td>
            <td>
              <input type="text" value={achievementsData.researchPublications.journals} onChange={e => handleChange(e, 'researchPublications', 'journals')} placeholder="Journals" />
            </td>
            <td>
              <input type="text" value={achievementsData.researchPublications.conference} onChange={e => handleChange(e, 'researchPublications', 'conference')} placeholder="Conference" />
            </td>
            <td>
              <input type="text" value={achievementsData.researchPublications.national} onChange={e => handleChange(e, 'researchPublications', 'national')} placeholder="National" />
            </td>
            <td>
              <input type="text" value={achievementsData.researchPublications.international} onChange={e => handleChange(e, 'researchPublications', 'international')} placeholder="International" />
            </td>
          </tr>
          <tr>
            <td>Books / Monograph</td>
            <td colSpan="4">
              <input type="text" value={achievementsData.booksMonograph} onChange={e => handleChange(e, 'booksMonograph')} placeholder="Books / Monograph" style={{ width: '100%' }} />
            </td>
          </tr>
          <tr>
            <td>Patents</td>
            <td colSpan="4">
              <input type="text" value={achievementsData.patents} onChange={e => handleChange(e, 'patents')} placeholder="Patents" style={{ width: '100%' }} />
            </td>
          </tr>
          <tr>
            <td>Awards</td>
            <td colSpan="4">
              <input type="text" value={achievementsData.awards} onChange={e => handleChange(e, 'awards')} placeholder="Awards" style={{ width: '100%' }} />
            </td>
          </tr>
          <tr>
            <td>Any other Information</td>
            <td colSpan="4">
              <input type="text" value={achievementsData.anyOtherInformation} onChange={e => handleChange(e, 'anyOtherInformation')} placeholder="Any other Information" style={{ width: '100%' }} />
            </td>
          </tr>
          <tr>
            <td>Reference</td>
            <td colSpan="4">
              <input type="text" value={achievementsData.reference} onChange={e => handleChange(e, 'reference')} placeholder="Reference" style={{ width: '100%' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AchievementsInput;
