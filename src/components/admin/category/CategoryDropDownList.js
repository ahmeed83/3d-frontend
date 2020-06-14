import React, { useEffect, useState } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { getCategories } from '../../../services/client';

const CategoryDropDownList = props => {
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    'Choose Category'
  );
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res.data);
    });
  }, []);

  const handelChange = e => {
    setSelectedCategoryName(e.target.name);
    if (props.setCategoryId) {
      props.setCategoryId(e.target.value);
    }
    if (props.form) {
      props.form.setFieldValue(props.field.name, e.target.value);
    }
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="info" outline caret>
        {selectedCategoryName}
      </DropdownToggle>
      <DropdownMenu>
        {categories.map(category => (
          <DropdownItem
            key={category.id}
            value={category.id}
            onClick={handelChange}
            name={category.name}
          >
            {category.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CategoryDropDownList;
