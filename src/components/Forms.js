import React, { useState } from 'react'
import * as Yup from "yup";

function Forms({onClose}) {
    const [close,setClose]=useState()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address:"",
        country:"",
        email: "",
        phoneNumber: "",
       
      });
      const [errors, setErrors] = useState({});

      const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is Required"),
        lastName: Yup.string().required("Last Name is Required"),
        address:Yup.string().required("Address is Required"),
        country:Yup.string().required("Country is Required"),
        email: Yup.string()
          .required("Email is Required")
          .email("Invalid email format"),
        phoneNumber: Yup.string()
          .matches(/^\d{10}$/, "Phone Number must be 10 digits")
          .required(),
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        try {
          await validationSchema.validate(formData, {abortEarly: false});
          console.log("Form Submitted", formData);
          setClose(onClose)
        } catch (error) {
          const newErrors = {};
    
          error.inner.forEach((err) => {
            newErrors[err.path] = err.message;
          });
    
          setErrors(newErrors);

        }
      };
    
      const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      

    
  return (
    <div className='form-overlay'>
         <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          placeholder="Enter your address"
          onChange={handleChange}
        />
        {errors.address && <div className="error">{errors.address}</div>}
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Enter your country"
          onChange={handleChange}
        />
        {errors.country && <div className="error">{errors.country}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <div className="error">{errors.phoneNumber}</div>
        )}
      </div>
      
      <button type="submit" > Submit</button>
    </form>
    </div>
  )
}

export default Forms