import { Button } from "@react-email/button";
import { Html } from "@react-email/html";

export const OrderTemplate = () => {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://www.microsoft.com/" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Html>
  );
};
