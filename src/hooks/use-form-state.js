import {useState} from 'react';

export const useFormState = (initialState) => {
  const [order, setOrder] = useState(initialState);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const onCheckboxChange = ({target}) => {
    const {name, checked} = target;
    setOrder({
      ...order,
      [name]: checked,
    });
  };

  return [order, onInputChange, onCheckboxChange];
};
