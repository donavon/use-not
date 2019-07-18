import { useState, useCallback } from 'react';

const useNot = (initialValue) => {
  const [value, setValue] = useState(!!initialValue);
  return [
    value,
    useCallback(() => {
      setValue(currentValue => !currentValue);
    }, [setValue]),
  ];
};

export default useNot;
