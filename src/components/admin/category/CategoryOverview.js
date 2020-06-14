import React, { useState } from 'react';
import { Col, Container, Label, Row } from 'reactstrap';
import { AddCategory } from '../category/AddCategory';
import { AddSubCategory } from '../category/AddSubCategory';
import CategoryDropDownList from './CategoryDropDownList';
import { SubCategoryDropDownList } from './SubCategoryDropDownList';

export const CategoryOverview = () => {
  const [categoryId, setCategoryId] = useState(null);

  return (
    <div className="py-5">
      <Container className="pt-5 px-5">
        <div className="border border-success py-4 px-2">
          <div className="pb-3 px-3">
            <h4>Category Overview</h4>
          </div>
          <ShowCategory categoryId={categoryId} setCategoryId={setCategoryId} />
          <AddCategory />
          <AddSubCategory />
        </div>
      </Container>
    </div>
  );
};

const ShowCategory = props => {
  return (
    <Col>
      <div className="border border-success py-2 px-2">
        <Label for="categoryName">Show Categories</Label>
        <Row className="px-4 py-1">
          <Col md="3">
            <CategoryDropDownList setCategoryId={props.setCategoryId} />
          </Col>
          <Col md="3">
            <SubCategoryDropDownList categoryId={props.categoryId} />
          </Col>
        </Row>
      </div>
    </Col>
  );
};
