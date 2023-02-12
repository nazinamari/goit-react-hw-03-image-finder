import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { StyledForm, Input, FormError } from './Form.styled';
import * as yup from 'yup';


export class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    nameInputId = nanoid();
    numberInputId = nanoid(); 

    handleSubmit = (value, { resetForm }) => {
        this.props.onSubmit({ ...value, id: nanoid() });
        resetForm();
    }

    nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    numberRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

    schema = yup.object().shape({
        name: yup.string().min(3).required('Name is a required field').matches(this.nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
        number: yup.string().min(8).required('Number is a required field').matches(this.numberRegExp, "Mobile phone number must have 8 digits"),
    });
    
    render() {
        return (
            <Formik
                initialValues={this.state}
                validationSchema={this.schema}
                onSubmit={this.handleSubmit}>
                <StyledForm autoComplete="off">
                    <label htmlFor={this.numberInputId}>
                        <span>Name</span><br/>
                        <Input
                            id={this.nameInputId}
                            type="text"
                            name="name"
                        />
                        <FormError name="name"/>
                    </label>
                    <label htmlFor={this.numberInputId}>
                        <span>Number</span><br/>
                        <Input
                            id={this.numberInputId}
                            type="tel"
                            name="number"
                        />
                        <FormError name="number"/>
                    </label>
                    <button type="submit" style={{ padding: 10 }}>Add contact</button>
                </StyledForm>
            </Formik>
        )
    }
}