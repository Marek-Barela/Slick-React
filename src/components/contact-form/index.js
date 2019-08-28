import React from "react";
import ContactInput from "../contact-input";
import ContactTextarea from "../contact-textarea";
import ContactButton from "../contact-button";
import { Form, Field } from "react-final-form";

const renderInput = ({ input, meta }) => {
  return (
    <ContactInput
      {...input}
      type="text"
      errorMessage={meta.touched && meta.error}
    />
  );
};

const renderTextarea = ({ input, meta }) => {
  return (
    <ContactTextarea
      {...input}
      type="text"
      errorMessage={meta.touched && meta.error}
    />
  );
};

const onSubmit = values => {
  console.log(values);
};

const ContactForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username" component={renderInput} />
          <Field name="subject" component={renderInput} />
          <Field name="email" component={renderInput} />
          <Field name="budget" component={renderInput} />
          <Field name="textarea" component={renderTextarea} />
          <ContactButton />
        </form>
      )}
    />
  );
};

export default ContactForm;
