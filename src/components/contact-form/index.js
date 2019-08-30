import React from "react";
import ContactInput from "../contact-input";
import ContactTextarea from "../contact-textarea";
import ContactButton from "../contact-button";
import { Form, Field } from "react-final-form";
import styles from "./index.module.css";
import contactImg from "../../images/contact.png";

const renderInput = ({ input, meta, placeholder }) => {
  return (
    <ContactInput
      {...input}
      type="text"
      errorMessage={meta.touched && meta.error}
      placeholder={placeholder}
    />
  );
};

const renderTextarea = ({ input, meta, placeholder }) => {
  return (
    <ContactTextarea
      {...input}
      type="text"
      errorMessage={meta.touched && meta.error}
      placeholder={placeholder}
    />
  );
};

const onSubmit = values => {
  alert("your message have been sent");
  /**
   * console.log(values);
   * Server logic
   */
};

const ContactForm = () => {
  const { formContainer, form, imageContainer } = styles;
  return (
    <div className={formContainer}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={form}>
            <Field
              name="Name"
              component={renderInput}
              validate={required}
              placeholder="Name"
            />
            <Field
              name="Subject"
              component={renderInput}
              validate={required}
              placeholder="Subject"
            />
            <Field
              name="Email"
              component={renderInput}
              validate={composeValidators(required, validEmail)}
              placeholder="Email"
            />
            <Field
              name="Budget"
              component={renderInput}
              validate={required}
              placeholder="Budget"
            />
            <Field
              name="Message"
              component={renderTextarea}
              validate={required}
              placeholder="Write Message"
            />
            <ContactButton />
          </form>
        )}
      />
      <div className={imageContainer}>
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

const required = value => {
  if (!value || value === "") {
    return "This field is requreed";
  }
  return undefined;
};

const validEmail = text => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(text)) {
    return "Please enter valid email";
  }
  return undefined;
};

const composeValidators = (...validators) => value => {
  return validators.reduce(
    (acc, validator) => acc || validator(value),
    undefined
  );
};

export default ContactForm;
