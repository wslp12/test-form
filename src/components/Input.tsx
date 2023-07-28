/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { InputProps } from ".";

function Input<T extends string>(props: InputProps<T>) {
  const { id, value$, rule } = props;

  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    value$.onValidation.on(() => {
      const result = getErrorMsg();
      setError(result);
    });

    value$[id].onChange(() => {
      const result = getErrorMsg();
      setError(result);
    });
  }, []);

  const getErrorMsg = () => {
    const result = rule.safeParse(value$[id].get());
    if (!result.success) {
      const flattenError = result.error.flatten().formErrors;
      return flattenError;
    }

    return [];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    value$[id].set(inputValue);
  };

  console.count();
  return (
    <>
      <input type="text" value={value$[id].get()} onChange={handleChange} />
      {error?.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );
}

export default Input;
