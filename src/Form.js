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
        <div>
          <label>Nome</label>
          <input placeholder="Seu nome" {...formik.getFieldProps('name')}/>
        </div>

        <div>
          <label>Email</label>
          <input placeholder="email@email.com" {...formik.getFieldProps('email')} />
        </div>

        <div>
          <label>Senha</label>
          <input placeholder="sua senha" {...formik.getFieldProps('password')}/>
        </div>

        <div>
          <label>Confirmação de senha</label>
          <input placeholder="mesma senha" {...formik.getFieldProps('confirmPassword')}/>
        </div>

        <div>
          <label>Endereço</label>
          <input placeholder="endereço" {...formik.getFieldProps('address.street')} />
        </div>

        <div>
          <label>Cidade</label>
          <input placeholder="cidade" {...formik.getFieldProps('address.city')} />
        </div>

      </form>

      <div className='json'>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </>
  )
}