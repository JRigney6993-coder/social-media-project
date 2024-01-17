import './App.css';
import React, { useState, FormEvent, ChangeEvent, KeyboardEvent } from 'react';
import { FaGooglePlusG } from "react-icons/fa";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchSubmit = () => {
    if (searchTerm) {
      window.open(`http://www.google.com/search?q=${searchTerm}`, '_blank');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchSubmit();
    }
  };

  return (
    <div className="App">
      <div className="Search">
        <form className="Search-form" onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); searchSubmit(); }}>
          <FaGooglePlusG className="Search-icon" />
          <input
            className="Search-input"
            type="text"
            placeholder="Search with Google Plus"
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
