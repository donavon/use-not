import { useState, useCallback } from 'react';

const useNot = (initialValue) => {
  const [value, setValue] = useState(!!initialValue);
  const toggle = useCallback(() => setValue(currentValue => !currentValue), [setValue]);
  
  return [
    value,
    toggle,
  ];
};

export default useNot;
