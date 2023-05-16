import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { FC } from "react";
import { IOrder } from "../email/order/model";

interface IProp {
  orders: Array<IOrder>;
}

export const OrderTemplate: FC<IProp> = (props) => {
  return (
    <Html>
      <Head />
      <Preview>Azure Container Apps Demo</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={title}>
            <strong>Azure Container Apps Demo</strong>
          </Text>
          {props.orders.map((order) => (
            <>
              <Section style={section}>
                <Column style={{ textAlign: "left" }}>
                  {order.productname}
                </Column>
                <Column style={{ textAlign: "right" }}>{order.quantity}</Column>
              </Section>
              <Hr />
            </>
          ))}

          <Text style={footer}>Thank you!</Text>
        </Container>
      </Body>
    </Html>
  );
};
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
