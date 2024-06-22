import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import validate from './validateForm';

const JobApplicationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);
  const [submittedData, setSubmittedData] = useState(null);

  function submit() {
    setSubmittedData(values);
  }

  useEffect(() => {
    if (submittedData) {
        console.log('Form submitted successfully', submittedData);
    }
  }, [submittedData]);

  return (
    
        <div className="h-100 p-7 gap-2 rounded-lg text-xl font-small bg-white my-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">EVENT REGISTRATION FORM </h2>
            
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={values.fullName} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="text" 
            name="phoneNumber" 
            value={values.phoneNumber} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Applying for Position</label>
          <select 
            name="position" 
            value={values.position} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border font-medium:100 border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
        </div>
        {['Developer', 'Designer'].includes(values.position) && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Relevant Experience (Years)</label>
            <input 
              type="number" 
              name="experience" 
              value={values.experience} 
              onChange={handleChange} 
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
          </div>
        )}
        {values.position === 'Designer' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Portfolio URL</label>
            <input 
              type="text" 
              name="portfolio" 
              value={values.portfolio} 
              onChange={handleChange} 
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
          </div>
        )}
        {values.position === 'Manager' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Management Experience</label>
            <input 
              type="text" 
              name="managementExperience" 
              value={values.managementExperience} 
              onChange={handleChange} 
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            {errors.managementExperience && <p className="text-red-500 text-xs mt-1">{errors.managementExperience}</p>}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Additional Skills</label>
          <div className="mt-1">
            <div className="flex items-center mb-2">
              <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} className="mr-2" /> JavaScript
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" name="skills" value="CSS" onChange={handleChange} className="mr-2" /> CSS
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" name="skills" value="Python" onChange={handleChange} className="mr-2" /> Python
            </div>
            {/* Add more skills as needed */}
          </div>
          {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Preferred Interview Time</label>
          <input 
            type="datetime-local" 
            name="interviewTime" 
            value={values.interviewTime} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.interviewTime && <p className="text-red-500 text-xs mt-1">{errors.interviewTime}</p>}
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-8 p-4 bg-green-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Form Data</h2>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone Number:</strong> {submittedData.phoneNumber}</p>
          <p><strong>Applying for Position:</strong> {submittedData.position}</p>
          {submittedData.experience && <p><strong>Relevant Experience:</strong> {submittedData.experience} years</p>}
          {submittedData.portfolio && <p><strong>Portfolio URL:</strong> {submittedData.portfolio}</p>}
          {submittedData.managementExperience && <p><strong>Management Experience:</strong> {submittedData.managementExperience}</p>}
          {submittedData.skills && (
            <p><strong>Additional Skills:</strong> {submittedData.skills.join(', ')}</p>
          )}
          <p><strong>Preferred Interview Time:</strong> {submittedData.interviewTime}</p>
        </div>
      )}
    
    </div>

  );
};

export default JobApplicationForm;
