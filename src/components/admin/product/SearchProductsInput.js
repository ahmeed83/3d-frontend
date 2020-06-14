import React from 'react';
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from 'reactstrap';

const SearchProductsInput = props => {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType='prepend'>
          <Button onClick={props.searchHandler} outline color='primary'>
            Search
          </Button>
        </InputGroupAddon>
        <Input
          id='searchInput'
          onChange={props.searchHandler}
          onKeyPress={props.searchHandler}
          placeholder='Search Products'
        />
        {props.admin ? (
          <InputGroupAddon addonType='append'>
            <Button onClick={props.reset} outline color='primary'>
              Reset
            </Button>
          </InputGroupAddon>
        ) : null}
      </InputGroup>
    </FormGroup>
  );
};

export default SearchProductsInput;
