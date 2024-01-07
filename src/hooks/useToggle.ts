import { useState } from "react";

function useToggle(init = false): [boolean, { toggle: () => void}] {
  const [value, setValue] = useState(init);
  return [
    value,
    {
      toggle: (e?) => {
        if (e) {
          e.preventDefault();
        }
        setValue((flag) => !flag);
      },
    },
  ];
}
export default useToggle;
