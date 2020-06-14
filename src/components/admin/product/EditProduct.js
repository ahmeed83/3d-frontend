import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonToggle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  CardImg,
  CardBody,
  Card,
  CardHeader
} from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import { getOneProduct, editProduct } from '../../../client';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';

export const EditProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  //   const editProduct = (productId, data) => {
  //     editProduct(productId, data);
  //     // products.setTrigger(Math.random());
  //   };

  useEffect(() => {
    const fetchData = async () => {
      getOneProduct(id).then(res =>
        res.json().then(product => {
          setProduct(product);
        })
      );
    };
    fetchData();
  }, [id]);

  const validationSchema = yup.object({
    productName: yup.string().required('Product name is required'),
    productPrice: yup.string().required('Product price is required')
  });

  return (
    <Container>
      <h1 className='pt-3'>Edit Product</h1>

      <Formik
        className='pt-4'
        initialValues={{ productName: '', productPrice: '' }}
        validationSchema={validationSchema}
        onSubmit={(updatedProduct, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(updatedProduct, null, 2));
            setSubmitting(false);
          }, 400);
          //   editProduct(productId, data);
          //   setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup row>
              <Label for='productName' sm={2}>
                Product Name:
              </Label>
              <Col>
                <Field
                  type='productName'
                  name='productName'
                  placeholder={product.name}
                  as={Input}
                />
                <ErrorMessage name='productName' component='div' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='productPrice' sm={2}>
                Product Price:
              </Label>
              <Col>
                <Field
                  type='productPrice'
                  name='productPrice'
                  placeholder={product.price}
                  as={Input}
                />
                <ErrorMessage name='productPrice' component='div' />
              </Col>
            </FormGroup>
            <FormGroup row className='pt-lg-3'>
              <Label for='pic' sm={2}>
                Picture
              </Label>
              <Col>
                <Card>
                  <CardHeader>Image 1</CardHeader>
                  <CardImg
                    top
                    width='100%'
                    src={product.picLocation}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <ButtonToggle
                      size='lg'
                      outline
                      color='primary'
                      className='float-left'
                    >
                      Upload
                    </ButtonToggle>
                  </CardBody>
                </Card>
              </Col>
            </FormGroup>

            <FormGroup className='pt-5'>
              <Field
                size='lg'
                className='float-right'
                outline
                color='info'
                type='submit'
                disabled={isSubmitting}
                as={Button}
              >
                Edit Product
              </Field>
            </FormGroup>
            <FormGroup>
              <Link to={`/products-overview/`}>
                <Button
                  size='lg'
                  className='float-left'
                  outline
                  color='primary'
                >
                  Go back
                </Button>
              </Link>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
