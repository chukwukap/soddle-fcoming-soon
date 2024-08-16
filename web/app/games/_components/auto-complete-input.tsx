import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/ui/input';

interface Suggestion {
  name: string;
  username: string;
}

interface SuggestionDropdownProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
}

const SuggestionItem: React.FC<{ suggestion: Suggestion }> = ({
  suggestion,
}) => (
  <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
    <div className="relative w-6 h-6">
      <Image
        src="/user-icon.png" // Replace with your actual icon path
        alt="User icon"
        layout="fill"
        className="rounded-full bg-green-500"
      />
    </div>
    <span className="text-white">
      {suggestion.name} (@{suggestion.username})
    </span>
  </div>
);

const SuggestionDropdown: React.FC<SuggestionDropdownProps> = ({
  suggestions,
  onSelect,
}) => (
  <div className="absolute mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
    {suggestions.map((suggestion, index) => (
      <div key={index} onClick={() => onSelect(suggestion)}>
        <SuggestionItem suggestion={suggestion} />
      </div>
    ))}
  </div>
);

interface AutocompleteInputProps {
  onSelect: (suggestion: Suggestion) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ onSelect }) => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock API call for suggestions
  const fetchSuggestions = (query: string) => {
    // Replace this with actual API call
    const mockSuggestions = [
      { name: 'Vitalik', username: 'vitalik' },
      { name: 'Vitalik Buterin', username: 'VitalikButerin' },
      { name: 'Vitalik Fan', username: 'vitalik_fan' },
    ].filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
    setSuggestions(mockSuggestions);
  };

  useEffect(() => {
    if (input.length > 0) {
      fetchSuggestions(input);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [input]);

  const handleSelect = (suggestion: Suggestion) => {
    setInput(suggestion.name);
    setShowSuggestions(false);
    onSelect(suggestion);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 bg-gray-700 text-white rounded-md"
        placeholder="Type to search..."
      />
      {showSuggestions && (
        <SuggestionDropdown suggestions={suggestions} onSelect={handleSelect} />
      )}
    </div>
  );
};

function nameofproduct() {
  return 'hello world';
}
export default AutocompleteInput;
