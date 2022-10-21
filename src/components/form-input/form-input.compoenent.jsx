import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
      // <label
      //   className={`${
      //     otherProps.value.length > 0 ? "shrink" : ""
      //   } form-input-label`}
      // >
      //   {label}
      // </label>
    )}
  </Group>
);

export default FormInput;
