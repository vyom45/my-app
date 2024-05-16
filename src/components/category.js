import React, { useState } from "react";

const DropdownWithSearch = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const options = ['Shirt', 'T-shirt', 'Pents', 'Shoose'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="">
      <button
        className="border-b-2 border-gray-200 bg-white text-gray-800 pb-3 px-4 inline-flex items-center w-[276px]"
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption : 'Select an Category'}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a.75.75 0 0 0 .53-.22l3.25-3.25a.75.75 0 1 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l3.25 3.25c.14.14.33.22.53.22z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-1 w-[200px] bg-white shadow-lg rounded border border-gray-300">
          <input
            type="text"
            placeholder="Search options"
            className="p-2 w-full border-b border-gray-600 focus:outline-none"
            value={searchInput}
            onChange={handleInputChange}
          />
          <div className="flex flex-col">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={`py-2 px-4 cursor-pointer ${
                  selectedOption === option ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <input
                  type="radio"
                  id={option}
                  name="option"
                  checked={selectedOption === option}
                  onChange={() => handleOptionClick(option)}
                />
                <label htmlFor={option} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
