import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';

function Createstudent() {
    const formik = useFormik({
        initialValues: {
            name: "",
            rollnumber: "",
            department:"",
            country: "",
            state:"",
            city: "",
            phone: "",
            dob: "",
            gender: ""
        },
        validate :(values)=>{
          let error = {};
          if (!values.name){
            error.name ="Plese Enter a Value"
          }
          if( values.name && (values.name.length <=  2 || values.name.length>15 )){
            error.name ="Studentname must be between 3 to 15 Characters"

          }
          if(values.rollnumber.toString().length!== 8){
            error.rollnumber ="Plese Enter a Valid Roll number"
          }
          
          if(values.phone.toString().length!== 10){
            error.phone ="Plese Enter a Valid Phone number"
          }
//           console.log(values.dob.split("-")[0]);
        //   console.log(new Date ().getFullYear());
         let age = new Date ().getFullYear()-parseInt(values.dob.split("-")[0])
        //   console.log(age);

          if(age < 18){
            error.dob = "You must be above 18"
          }
          return error; 
        },
        onSubmit: async (values,{ resetForm }) => {
            try {
                const students = await axios.post("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/student",
                    values);
                alert("Sucess :)");
                resetForm();

            } catch (error) {

            }

        },
    });
    return (
        <div class="container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Student Name *</label>
                            <input
                                name="name" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                type={"text"} 
                                className={`form-control ${formik.errors.name ? 'error-box' : ""
                                } ${formik.touched.name && !formik.errors.name ? "success-box":""}` }>
                               
                            </input>
                            {/* {JSON.stringify(formik.touched)}
                            {JSON.stringify(formik.errors)} */}
                            {
                              formik.touched.name && formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span>: null
                            }
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Roll Number *</label>
                            <input name="rollnumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.rollnumber}
                                type={"number"}
                                className={`form-control ${formik.errors.rollnumber ? 'error-box' : ""
                                } ${formik.touched.rollnumber && !formik.errors.rollnumber ? "success-box":""}` } >

                            </input>
                            {
                               formik.touched.rollnumber && formik.errors.rollnumber ? <span style={{color:'red'}}>{formik.errors.rollnumber}</span>: null
                            }
                        </div>
                    </div>
                    <div className='col-lg-3'>
                    <div className='form-group'>
                        <label>Department</label>
                        <select name="department"
                                onChange={formik.handleChange}
                                value={formik.values.department}
                         className="form-control">
                            <option>Web Developer</option>
                            <option>Java Developer</option>
                            <option>React Developer</option>
                            <option>Python Developer</option>
                            <option>Mern Stack Developer</option>
                        </select>

                    </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label>Country</label>
                            <select name="country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                className="form-control">
                                <option>India</option>
                                <option>China</option>
                                <option>America</option>
                            </select>

                        </div>

                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label>State</label>
                            <select
                                name="state"
                                onChange={formik.handleChange}
                                value={formik.values.state} className="form-control">
                                <option>India</option>
                                <option>China</option>
                                <option>America</option>
                            </select>

                        </div>

                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label>City</label>
                            <select name="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                className="form-control">
                                <option>India</option>
                                <option>China</option>
                                <option>America</option>
                            </select>

                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label>Phone</label>
                            <input type={"number"}
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className={`form-control ${formik.errors.phone ? 'error-box' : ""
                            } ${formik.touched.phone && !formik.errors.phone ? "success-box":""}` } >
                            </input>
                            {
                               formik.touched.phone && formik.errors.phone ? <span style={{color:'red'}}>{formik.errors.phone}</span>: null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label>Date Of Birth</label>
                            <input name="dob"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                type={"date"}
                                className={`form-control ${formik.errors.dob ? 'error-box' : ""
                            } ${formik.touched.dob && !formik.errors.dob ? "success-box":""}` } >
                            </input>
                            {
                              formik.touched.dob&&formik.errors.dob ? <span style={{color:'red'}}>{formik.errors.dob}</span>: null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label>Gender</label>
                            <select name="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                                className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <input type={'submit'} className='btn btn-primary'></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createstudent