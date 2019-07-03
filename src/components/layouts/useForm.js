import {useState} from 'react';
import validate from "./validate"


export default function useForm(callback, validate) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(inputs))
    setIsSubmitting(true)
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  return {
    handleChange,
    handleSubmit,
    inputs,
    errors
  }

}
