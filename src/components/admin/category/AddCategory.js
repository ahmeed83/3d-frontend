import React, { useState } from 'react';
import { Badge, Button, Col, FormGroup, Input, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Alert3D } from '../../common/Alert3D';
import { addCategory } from '../../../services/client';

const initialValues = {
  categoryName: '',
};

const validationSchema = yup.object({
  categoryName: yup.string().required('Please add a category!'),
});

export const AddCategory = () => {
  const [showModal, setModalVisible] = useState(false);
  const dismissModal = () => setModalVisible(false);
  const [textModal, setTextModal] = useState('');
  const [textColorModal, setTextColorModal] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(category, { setSubmitting, resetForm }) => {
        addCategory(category)
          .then(res => {
            setModalVisible(true);
            setTextModal('Category with name ' + res.data + ' is Created!');
            setTextColorModal('info');
            resetForm({});
            setSubmitting(false);
          })
          .catch(err => {
            setModalVisible(true);
            if (err.response.data.status === 409) {
              setTextColorModal('secondary');
              setTextModal(err.response.data.errorMessage);
            } else {
              setTextColorModal('warning');
              setTextModal(
                'There is some error in the server, Try after a while'
              );
            }
            setSubmitting(false);
          });
      }}
    >
      {({ submitForm, isSubmitting, errors, touched }) => (
        <Col>
          <Alert3D
            visible={showModal}
            text={textModal}
            textColor={textColorModal}
            onDismiss={dismissModal}
          />
          <Form className="py-3">
            <div className="border border-success py-2 px-2">
              <Label for="categoryName">Add Category:</Label>
              <FormGroup row className="px-4 py-1">
                <Col md="8">
                  <Field
                    type="categoryName"
                    name="categoryName"
                    placeholder="Insert name of the category"
                    as={Input}
                  />
                  <div className="pt-1">
                    {errors.categoryName && touched.categoryName && (
                      <Badge color="warning">{errors.categoryName}</Badge>
                    )}
                  </div>
                </Col>
                <Col md="4">
                  <Field
                    size="lg"
                    className="float-right"
                    outline
                    color="info"
                    onClick={() => submitForm()}
                    disabled={isSubmitting}
                    as={Button}
                  >
                    Add
                  </Field>
                </Col>
              </FormGroup>
            </div>
          </Form>
        </Col>
      )}
    </Formik>
  );
};
