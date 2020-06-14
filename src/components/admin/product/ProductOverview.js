import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';
import { deleteProduct } from '../../../services/client';
import { ProductContext } from '../../../services/context/ProductContext';
import ProductPagination from '../../../view/product/ProductPagination';
import SearchProductsInput from './SearchProductsInput';

export const ProductOverview = () => {
  const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

  const products = useContext(ProductContext);

  const [productName, setProductName] = useState('');
  const searchHandlerText = searchText(products, setProductName);

  const reset = () => {
    products.setPageNumber(0);
    products.setProductName('');
  };

  const del = productId => {
    deleteProduct(productId);
    products.setTrigger(Math.random());
  };

  useEffect(() => {
    products.setProductName(productName);
  }, [productName, products]);

  return (
    <div className="py-5">
      <Container className="pt-4">
        <div className="border border-success py-3 px-5">
          <Row>
            <Col>
              <h4 className="pb-3">Products overview</h4>
            </Col>
            <Col>
              <Link to="/add-product">
                <Button className="float-right" outline color="primary">
                  Add new Product
                </Button>
              </Link>
            </Col>
          </Row>
          <div className="float-left">
            <SearchProductsInput
              searchHandler={searchHandlerText}
              admin={true}
              reset={reset}
            />
          </div>
          <div className="float-right">
            <ProductPagination
              setPageNumber={products.setPageNumber}
              totalPages={products.totalPages}
            />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '35%' }}>Name</th>
                <th style={{ width: '20%' }}>Price</th>
                <th style={{ width: '20%' }}>Category</th>
                <th style={{ width: '10%' }}>Edit</th>
                <th style={{ width: '10%' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.productsProvidedFiltered.map((product, id) => (
                <tr onClick={() => openProductOverview(product)} key={id}>
                  <th scope="row">{id + 1 + products.pageNumber * 20}</th>
                  <td>{product.name}</td>
                  <td>{product.price} $</td>
                  <td>{product.category.name}</td>
                  <td>
                    <ProductDetailsModal product={product} />
                  </td>
                  <td>
                    <Button
                      onClick={() => del(product.id)}
                      size="md"
                      color="danger"
                    >
                      {deleteIcon}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

function openProductOverview(product) {
  // console.log(product.name);
}

function searchText(products, setProductName) {
  return event => {
    if (event.type === 'click') {
      setProductName(document.getElementById('searchInput').value);
      document.getElementById('searchInput').value = '';
      products.setPageNumber(0);
    }
  };
}

const ProductDetailsModal = props => {
  const editIcon = <FontAwesomeIcon icon={faEdit} />;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <Form inline onSubmit={e => e.preventDefault()}>
        <Button color="primary" onClick={toggle}>
          {editIcon}
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop="static"
        centered
        size="lg"
        backdropTransition={{ timeout: 1300 }}
      >
        <ModalHeader toggle={toggle}>{props.product.name}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="name" sm={4}>
                Name :
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={props.product.name}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="price" sm={4}>
                Price
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder={props.product.price}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="category" sm={4}>
                Category :
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder={props.product.category.name}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="subCategory" sm={4}>
                Sub Category :
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="subCategory"
                  id="subCategory"
                  placeholder={props.product.subCategory.name}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup className="pt-5" row>
              <Label for="image" sm={4}>
                Image :
              </Label>
              <Col sm={8}>
                <img
                  style={{ width: 500, height: 300 }}
                  src={props.product.picLocation}
                  alt={props.product.name}
                />
                <Button color="primary" onClick={toggle}>
                  Upload a new image
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="float-right" outline color="primary">
            Edit Product
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
