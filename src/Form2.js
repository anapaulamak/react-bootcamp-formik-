import React from 'react';
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  address: {
    street: "",
    number: "",
    city: ""
  },
  password: "",
  confirmPassword: ""
};

export default function Form() {
  const onSubmit = values => {
    console.log(formik.values)
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });
  
  return(
    <>
      <form>
        <label>Nome</label>
        <input placeholder="Name" {...formik.getFieldProps('name')}/>
        <br />

        <label>Email</label>
        <input placeholder="Email" {...formik.getFieldProps('email')} />
        <br />

        <label>Senha</label>
        <input placeholder="Password" {...formik.getFieldProps('password')}/>
        <br />

        <label>Confirmação de senha</label>
        <input placeholder="confirm password" {...formik.getFieldProps('confirmPassword')}/>
        <br />

        <label>Endereço</label>
        <input placeholder="Address" {...formik.getFieldProps('address.street')} />
        <br />
        
        <label>Cidade</label>
        <input placeholder="City" {...formik.getFieldProps('address.city')} />
      </form>

      <div style={{ textAlign: 'left'}}>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </>
  )
}