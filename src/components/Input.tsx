function Input(props: InputProps) {
  const { type = "text", value, onChange } = props;

  console.count();
  return (
    <input
      type={type}
      className="border border-neutral-300"
      value={value}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
    />
  );
}

export default Input;
