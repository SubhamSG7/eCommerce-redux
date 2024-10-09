import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data:', values);
  };

  return (
    <div className='mt-9'>
      <h1 className='text-center font-bold text-4xl'>Contact Us</h1>
      <div className='flex items-center justify-center  p-9 bg-white font-[sans-serif]'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className='space-y-9 w-96'>
              <div>
                <Field
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
                />
                <ErrorMessage name='name' component='div' className='text-red-500 text-sm' />
              </div>
              <div>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
                />
                <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
              </div>
              <div>
                <Field
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
                />
                <ErrorMessage name='subject' component='div' className='text-red-500 text-sm' />
              </div>
              <div>
                <Field
                  as='textarea'
                  name='message'
                  rows='6'
                  placeholder='Message'
                  className='w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent'
                />
                <ErrorMessage name='message' component='div' className='text-red-500 text-sm' />
              </div>
              <button
                type='submit'
                className='text-white bg-cyan-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6'
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
