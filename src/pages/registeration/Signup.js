import React from 'react';
import { InputGroup, Row,Col, Form, Button, Container, Nav } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  city: yup.string().required(),
  county: yup.string().required(),
  shipping_Address: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  createdOn: yup.date().default(function () {
    return new Date(); }),
});

function Signup() {

  return (
    <Container className="d-flex justify-content-center">
    
        
        <h1 className="d-flex justify-content-center fs-1 mb-3" style={{color:"#50c850"}}>Signup here</h1>


      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        username: '',
        email:"",
        city: '',
        County: '',
        Shipping_Address: '',
        terms: false,
        createdOn: yup.date().default(function () {
            return new Date(); }),
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="mt-3">
          <Row className="mt-3 mb-3">

            

            <Form.Group as={Row} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Row}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>County</Form.Label>
              <Form.Control
                type="text"
                placeholder="County"
                name="county"
                value={values.county}
                onChange={handleChange}
                isInvalid={!!errors.county}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.county}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Shipping_Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Shipping Address"
                name="shipping_Address"
                value={values.shipping_Address}
                onChange={handleChange}
                isInvalid={!!errors.shipping_Address}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.shipping_Address}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button style={{backgroundColor:"#50c850"}} type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
</Container>
  );
}

export default Signup;
