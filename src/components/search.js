import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './search.css';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setCandidates(response.data);
    };
    fetchCandidates();
  }, []);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name" />

      <div className="candidates-grid">
        {filteredCandidates.map(candidate => (
          <div className="candidate-card" key={candidate.id}>
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>City:</strong> {candidate.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;
