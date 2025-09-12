import React, { useState, useEffect, useRef, useCallback } from 'react';

type Option = {
  id: number;
  name: string;
};

type AutocompleteProps = {
  fetchOptions: (query: string) => Promise<Option[]>;
};

const Autocomplete: React.FC<AutocompleteProps> = ({ fetchOptions }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<number>(0);

  const handleFetch = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const results = await fetchOptions(query);
      setOptions(results);
    } catch {
      setOptions([]);
    } finally {
      setLoading(false);
    }
  }, [fetchOptions]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!inputValue.trim()) {
      setOptions([]);
      return;
    }
    debounceRef.current = window.setTimeout(() => {
      handleFetch(inputValue);
    }, 300);
  }, [inputValue, handleFetch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0) {
        setInputValue(options[highlightedIndex].name);
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
      />
      {loading && <div className="loader">Loading...</div>}
      {isOpen && options.length > 0 && (
        <ul role="listbox">
          {options.map((opt, idx) => (
            <li
              key={opt.id}
              id={`option-${idx}`}
              className={idx === highlightedIndex ? 'highlight' : ''}
              onMouseDown={() => setInputValue(opt.name)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
      {isOpen && !loading && options.length === 0 && <div>No results found</div>}
    </div>
  );
};

export default Autocomplete;
