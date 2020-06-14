import React from 'react';
import { Button, Container, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const EmployeeOverview = () => {
  const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />;

  const products = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1];

  return (
    <div className="py-5">
      <Container className="pt-4 mb-4">
        <h1 className="pb-3">Employees overview</h1>
        <Table>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>#</th>
              <th style={{ width: '45%' }}>Name</th>
              <th style={{ width: '40%' }}>Telephone</th>
              <th style={{ width: '10%' }}>More details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>Ahmed Aziz Hussain</td>
                <td>00964 7901 6060941</td>
                <td>
                  <Link to={`/employee-page/${id}`}>
                    <Button block size="md" color="primary">
                      {infoIcon}
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
