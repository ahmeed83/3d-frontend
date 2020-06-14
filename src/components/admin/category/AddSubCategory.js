import React, { useState } from 'react';
import { Badge, Button, Col, FormGroup, Input, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Alert3D } from '../../common/Alert3D';
import CategoryDropDownList from './CategoryDropDownList';
import { addSubCategory } from '../../../services/client';

const initialValues = {
  subCategoryName: '',
  categoryId: '',
};

const validationSchema = yup.object({
  subCategoryName: yup.string().required('Please add a sub category!'),
  categoryId: yup.string().required('Please add a category!'),
});

export const AddSubCategory = () => {
  const [showModal, setModalVisible] = useState(false);
  const dismissModal = () => setModalVisible(false);
  const [textModal, setTextModal] = useState('');
  const [textColorModal, setTextColorModal] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(subCategoryName, { setSubmitting, resetForm }) => {
        addSubCategory(subCategoryName)
          .then(res => {
            setModalVisible(true);
            setTextModal('Sub category with name ' + res.data + ' is Created!');
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
            resetForm({});
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
              <Label for="subCategoryName">Add Sub Category:</Label>
              <FormGroup row className="px-4 py-1">
                <Col md="3">
                  <Field name="categoryId" component={CategoryDropDownList} />
                  <div className="pt-1">
                    {errors.categoryId && touched.categoryId && (
                      <Badge color="warning">{errors.categoryId}</Badge>
                    )}
                  </div>
                </Col>
                <Col md="6">
                  <Field
                    type="subCategoryName"
                    name="subCategoryName"
                    placeholder="Insert name of the sub category"
                    as={Input}
                  />
                  <div className="pt-1">
                    {errors.subCategoryName && touched.subCategoryName && (
                      <Badge color="warning">{errors.subCategoryName}</Badge>
                    )}
                  </div>
                </Col>
                <Col md="2">
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
