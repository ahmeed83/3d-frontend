import React, { useEffect, useState } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { getSubCategories } from '../../../services/client';

export const SubCategoryDropDownList = props => {
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState(
    'Choose Sub Category'
  );
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    getSubCategories(props.categoryId).then(res => {
      setSubCategories(res.data);
    });
  }, [props.categoryId]);

  const handelChange = e => {
    if (props.form) {
      props.form.setFieldValue(props.field.name, e.target.value);
    }
    setSelectedSubCategoryName(e.target.name);
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="info" outline caret>
        {selectedSubCategoryName}
      </DropdownToggle>
      <DropdownMenu>
        {subCategories.map(subCategory => (
          <DropdownItem
            key={subCategory.id}
            value={subCategory.id}
            onClick={handelChange}
            name={subCategory.subCategoryName}
          >
            {subCategory.subCategoryName}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SubCategoryDropDownList;
