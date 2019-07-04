export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email addresss is required";
  } else if (!/\s+@\s+\.\s+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Passwords need to be 10 characters or more";
  }

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  return errors;
}
