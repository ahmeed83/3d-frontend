import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Table,
  Spinner,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'reactstrap';
import { getCustomers } from '../../../services/client';

export const CustomersOverview = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then(res => {
      setCustomers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="py-5">
      <Container className="pt-5 mb-4">
        <h3 className="pb-3">Customers overview</h3>
        {isLoading ? (
          <div className="spinner">
            <Spinner style={{ width: '6rem', height: '6rem' }} type="grow" />
          </div>
        ) : (
          <Table hover>
            <thead>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '20%' }}>Name</th>
                <th style={{ width: '20%' }}>Telephone</th>
                <th style={{ width: '25%' }}>Email</th>
                <th style={{ width: '25%' }}>Address</th>
                <th style={{ width: '5%' }}>More details</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((employee, id) => (
                <tr key={id}>
                  <th scope="row">{id + 1}</th>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <CustomerModal />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        ;
      </Container>
    </div>
  );
};

const CustomerModal = () => {
  const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={e => e.preventDefault()}>
        <Button color="primary" onClick={toggle}>
          {infoIcon}
        </Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
