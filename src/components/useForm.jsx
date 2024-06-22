import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    skills: [],
    interviewTime: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setValues({
        ...values,
        skills: checked ? [...values.skills, value] : values.skills.filter(skill => skill !== value)
      });
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
