import React from "react";
import {Card, CardBody, CardText, CardTitle, Container} from "reactstrap";

export const OrderDetailsPage = () => {
    return (
        <Container className="pt-4" mb-4>
            <h1 className="pb-3">Order Details Page</h1>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h3>Ahmed Aziz Hussain</h3>
                    </CardTitle>
                    <CardText>
                        <p>Address: amsterdam</p>
                        <p>phone: 009647901606941</p>
                        <p>Order: Macbook 13</p>
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    );
};
