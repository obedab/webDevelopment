/*import React, {FormEvent, useRef} from 'react'

const Form = () => {
const nameRef = useRef<HTMLInputElement>(null);
const ageRef = useRef<HTMLInputElement>(null); 
const person = {name:'', age: 0}; 


  const handleSubmit=(event: FormEvent)=>{
    event.preventDefault();
    if (nameRef.current !== null)
      person.name = (nameRef.current.value);
  
  if (ageRef.current !== null)
  person.age = parseInt(ageRef.current.value);
 console.log(person);
 

  }

 
  return (
    <form onSubmit={handleSubmit}>
    
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age
        </label>
        <input  ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form*/






// interface FormData{
  //   name: string;
  //   age: number;
  // }
  
  // const Form = () => {
  // const{register,
  //   handleSubmit,
  //    formState: {errors} 
  //   }= useForm<FormData>();
  
  //     const onSubmit = (data: FieldValues) => console.log(data);
      
     
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
    
  //     <div className="mb-3">
  //       <label htmlFor="name" className="form-label">Name
  //       </label>
  //       <input 
  //       {...register('name', {required: true, minLength: 3 })} 
        
  //       id="name"
  //       type="text"
  //       className="form-control"/>
  //     </div>
  //     { errors.name?.type === 'required' && <p className="text-danger" >The name must be at least 3 characters.</p>}
  //     { errors.name?.type === 'minLength' && <p className="text-danger">The name field is required.</p> }
  
  //     <div className="mb-3">
  //       <label htmlFor="age" className="form-label">Age
  //       </label>
  //       <input {...register('age')}
        
  //       id="age"
  //       type="number" 
  //       className="form-control" />
  //     </div>
  //     <button type="submit" className="btn btn-primary">Submit</button>
  //   </form>
  // );
  // }
  
  // export default Form
  


/*import { FormEvent, useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import{ z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, {message: 'Name must be at least 3 characters '}),
  age: z.number({invalid_type_error: 'Age field is required.'}).min(18, {message: "Age must be atleast 18"})
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const{register,
    handleSubmit,
     formState: {errors, isValid} 
    }= useForm<FormData>({resolver: zodResolver(schema) }); 
     const onSubmit = (data: FieldValues) => console.log(data);
    
   
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name
          </label>
          <input 
          {...register('name')} 
          
          id="name"
          type="text"
          className="form-control"/>
        
      { errors.name && <p className="text-danger" >{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age
          </label>
          <input {...register('age', {valueAsNumber: true})}
          
          id="age"
          type="number" 
          className="form-control" />
           { errors.age && <p className="text-danger" >{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
    }
    
    export default Form
    
*/
import React, { useState} from "react";

function MyForm (){
  const [formData, setFormData] =useState({
    name: "",
    email: "",
    message: "",
  }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value } = e.target;
     setFormData((prevData) =>({
      ...prevData,
       [name]:value,

     }));
  };
  const handleSubmit =(e:React.FormEvent) =>{
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return(
    <form>
      <div> 
        <label htmlFor="name">Name:</label>

        <input 
          type="text"  
          id="name"
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required
       /> 
      </div>

      <div>
        <label htmlFor="email"> Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <label htmlFor="messsage">Message:</label>
      <textarea 
      name="message" 
      id="message" 
      value={formData.message}
      onChange={handleChange}
      required
      />
    <button type="submit" onChange={handleSubmit}>Submit</button>
    </form>
  );
}
export default MyForm;