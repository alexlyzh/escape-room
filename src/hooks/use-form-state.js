import {useState} from 'react';

export const useFormState = (initialState) => {
  const [state, setState] = useState(initialState);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onCheckboxChange = ({target}) => {
    const {name, checked} = target;
    setState({
      ...state,
      [name]: checked,
    });
  };

  return [state, onInputChange, onCheckboxChange];
};
