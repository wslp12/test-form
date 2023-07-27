import { useEffect, useState } from "react";
import { InputProps } from ".";

function Input(props: InputProps) {
  const { value, onChange, rule } = props;

  const [text, setText] = useState(value);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setText(inputValue);
    onChange(e.target.value);

    const result = rule.safeParse(inputValue);

    if (!result.success) {
      const { formErrors } = result.error.flatten();
      setError(formErrors);
      return;
    }

    setError([]);
  };

  console.log("render");

  return (
    <>
      <input
        className="border border-neutral-300"
        value={text}
        onChange={handleChange}
      />
      {error.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}

export default Input;
