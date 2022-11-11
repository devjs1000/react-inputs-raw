import {
  ChakraProps,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { object, string } from "yup";

const Email = ({
  label,
  helperText,
  helperTextStyle,
  inputStyle,
  labelStyle,
  containerStyle,
  onChange,
}: Props) => {
  const [alertMsg, setAlert] = useState(helperText);
  const schema = object().shape({
    email: string().email().required(),
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const msg = await schema.validate({ email: e.target.value });
      onChange(e);
      setAlert("");
    } catch (err: any) {
      setAlert(err.message);
    }
  };

  return (
    <FormControl onChange={handleChange} p={4} bg={"white"} {...containerStyle}>
      {label && <FormLabel {...labelStyle}>{label}</FormLabel>}
      <Input type="email" {...inputStyle} spellCheck={"false"} />
      {helperText && (
        <FormHelperText {...helperTextStyle}>{alertMsg}</FormHelperText>
      )}
    </FormControl>
  );
};

interface Props {
  label: string;
  helperText?: string;
  labelStyle?: ChakraProps;
  inputStyle?: ChakraProps;
  helperTextStyle?: ChakraProps;
  containerStyle?: ChakraProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Email;
