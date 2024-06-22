const validate = values => {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    if (!values.position) {
      errors.position = 'Position is required';
    }
  
    if (['Developer', 'Designer'].includes(values.position) && (!values.experience || values.experience <= 0)) {
      errors.experience = 'Relevant Experience is required and must be greater than 0';
    }
  
    if (values.position === 'Designer' && !values.portfolio) {
      errors.portfolio = 'Portfolio URL is required';
    } else if (values.position === 'Designer' && values.portfolio && !/^https?:\/\/[^\s]+$/.test(values.portfolio)) {
      errors.portfolio = 'Portfolio URL is invalid';
    }
  
    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (!values.skills.length) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validate;
  