import React, { useState } from 'react';

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('ECRD');

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleDropdownOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(true);    
  };

  return (
    <div className="home-page">
      <div className="header">
        <div className="dropdown-menu">
          <span className="dropdown" onClick={handleDropdownToggle}>
            <h3>Data Scientist Program ^</h3>
          </span >
          {isDropdownOpen && (
            <div className="dropdown-items">
              <div className="dropdown"> 
                <span 
                  className={`option-text ${selectedOption === 'ECRD' ? 'selected' : ''}`} 
                  onClick={() => handleDropdownOptionClick('ECRD')} 
                >
                  ECRD
                </span>
              </div>

              <div className="dropdown"> 
                <span 
                  className={`option-text ${selectedOption === 'FSR222222' ? 'selected' : ''}`} 
                  onClick={() => handleDropdownOptionClick('FSR222222')} 
                >
                  FSR222222
                </span>
              </div>

              <div className="dropdown"> 
                <span 
                  className={`option-text ${selectedOption === 'DS261121' ? 'selected' : ''}`} 
                  onClick={() => handleDropdownOptionClick('DS261121')} 
                >
                  DS261121
                </span>
              </div>

              <div className="dropdown"> 
                <span 
                  className={`option-text ${selectedOption === 'DS031221' ? 'selected' : ''}`} 
                  onClick={() => handleDropdownOptionClick('DS031221')} 
                >
                  DS031221
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        <h2>Welcome to the Data Scientist Program!</h2> <br/> <br/>
        <h3>
          Upcoming Certifications <br/> <br/>
        </h3>
        <h3>
          Continue Learning
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
