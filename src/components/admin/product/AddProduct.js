import React, { useState } from 'react';
import {
  Badge,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { Dropzone3D } from './Dropzone3D';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Alert3D } from '../../common/Alert3D';
import CategoryDropDownList from '../category/CategoryDropDownList';
import SubCategoryDropDownList from '../category/SubCategoryDropDownList';
import { addProduct } from '../../../services/client';

export const AddProduct = () => {
  // Alert attributes
  const [showModal, setModalVisible] = useState(false);
  const dismissModal = () => setModalVisible(false);
  const [textModal, setTextModal] = useState('');
  const [textColorModal, setTextColorModal] = useState('');
  const [categoryId, setCategoryId] = useState(null);

  //Formik attributes
  const initialValues = {
    productName: '',
    productPrice: '',
    categoryId: '',
    subCategoryId: '',
    productImage: '',
  };

  const validationSchema = yup.object({
    productName: yup.string().required('Please add a name to the product!'),
    productPrice: yup
      .number()
      .typeError('you must specify a number')
      .positive('The price must be greater than zero')
      .required('Please add a price to the product!'),
    categoryId: yup.string().required('Please add a category to the product!'),
    subCategoryId: yup
      .string()
      .required('Please add a sub category to the product!'),
    productImage: yup.string().required('Please add an image to the product!'),
  });

  return (
    <Container>
      <h4 className="pt-3">Add Product</h4>
      <Formik
        className="pt-4"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(product, { setSubmitting, resetForm }) => {
          const formData = new FormData();
          formData.append('productName', product.productName);
          formData.append('productPrice', product.productPrice);
          formData.append('categoryId', product.categoryId);
          formData.append('subCategoryId', product.subCategoryId);
          formData.append('productImage', product.productImage);
          addProduct(formData)
            .then(res => {
              setModalVisible(true);
              setTextModal('Product with name ' + res.data + ' is Created!');
              setTextColorModal('info');
              resetForm({});
              setSubmitting(false);
            })
            .catch(err => {
              setModalVisible(true);
              setTextModal(
                'There is some error in the server, Try after a while'
              );
              setTextColorModal('warning');
              setSubmitting(false);
            });
        }}
      >
        {({ submitForm, isSubmitting, errors, touched, setFieldValue }) => (
          <Col className="pt-4" md={{ size: 8, offset: 2 }}>
            <Alert3D
              visible={showModal}
              text={textModal}
              textColor={textColorModal}
              onDismiss={dismissModal}
            />
            <Form>
              <FormGroup row>
                <Col md="3">
                  <Label for="productName">Product Name:</Label>
                </Col>
                <Col md="8">
                  <Field
                    type="productName"
                    name="productName"
                    placeholder="Insert name of the product"
                    as={Input}
                  />
                  <div className="pt-1">
                    {errors.productName && touched.productName && (
                      <Badge color="warning">{errors.productName}</Badge>
                    )}
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label for="productPrice">Product Price:</Label>
                </Col>
                <Col md="8">
                  <Field
                    type="text"
                    name="productPrice"
                    placeholder="Insert price of the product"
                    as={Input}
                  />
                  <div className="pt-1">
                    {errors.productPrice && touched.productPrice && (
                      <Badge color="warning">{errors.productPrice}</Badge>
                    )}
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label for="categoryId">Product Category:</Label>
                </Col>
                <Col md="8">
                  <Field
                    name="categoryId"
                    setCategoryId={setCategoryId}
                    component={CategoryDropDownList}
                  />
                  <div className="pt-1">
                    {errors.categoryId && touched.categoryId && (
                      <Badge color="warning">{errors.categoryId}</Badge>
                    )}
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label for="subCategoryId">Product Sub Category:</Label>
                </Col>
                <Col md="8">
                  <Field
                    name="subCategoryId"
                    categoryId={categoryId}
                    component={SubCategoryDropDownList}
                  />
                  <div className="pt-1">
                    {errors.subCategoryId && touched.subCategoryId && (
                      <Badge color="warning">{errors.subCategoryId}</Badge>
                    )}
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label for="productImage">Product Images:</Label>
                </Col>
                <Col md="3">
                  <Dropzone3D setFieldValue={setFieldValue} />
                  <div className="pt-1">
                    {errors.productImage && touched.productImage && (
                      <Badge color="warning">{errors.productImage}</Badge>
                    )}
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="pt-5">
                <Field
                  size="lg"
                  className="float-right"
                  outline
                  color="info"
                  onClick={() => submitForm()}
                  disabled={isSubmitting}
                  as={Button}
                >
                  Add Product
                </Field>
              </FormGroup>
              <FormGroup>
                <Link to={`/products-overview/`}>
                  <Button
                    size="lg"
                    className="float-left"
                    outline
                    color="primary"
                  >
                    Go back
                  </Button>
                </Link>
              </FormGroup>
            </Form>
          </Col>
        )}
      </Formik>
    </Container>
  );
};
