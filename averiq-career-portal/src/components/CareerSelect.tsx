import { useState } from 'react';
import { Link } from 'react-router-dom';

const careerOptions = [
  { id: 1, name: 'Software Engineer' },
  { id: 2, name: 'Data Scientist' },
  { id: 3, name: 'Product Manager' },
  { id: 4, name: 'UX/UI Designer' },
  { id: 5, name: 'DevOps Engineer' },
];

export default function CareerSelect() {
  const [selectedCareer, setSelectedCareer] = useState('');

  const handleCareerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCareer(event.target.value);
  };

  return (
    <div className="career-select">
      <h2 className="text-2xl font-bold mb-4">Select Your Career Option</h2>
      <select
        value={selectedCareer}
        onChange={handleCareerChange}
        className="border rounded p-2 mb-4"
      >
        <option value="" disabled>Select a career</option>
        {careerOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {selectedCareer && (
        <div className="mt-4">
          <p className="text-lg">You have selected: {selectedCareer}</p>
          <Link to="/upload" className="mt-2 inline-block bg-blue-600 text-white rounded px-4 py-2">
            Upload Resume
          </Link>
        </div>
      )}
    </div>
  );
}