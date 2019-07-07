import { useState, useEffect } from "react";
import validate from "./validate";

export default function useForm(callback) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(inputs));
    setIsSubmitting(true);
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return {
    handleChange,
    inputs,
    errors,
    handleSubmit
  };
}
