import { Col, Row, Alert } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  console.log("message", message);
  console.log("status", status);
  console.log("onValidated", onValidated);
  const clearFields = useCallback(() => {
    setEmail("");
  }, []);

  useEffect(() => {
    if (status === "success") clearFields();
  }, [clearFields, status]);

  const handleChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    },
    [email, onValidated]
  );

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={6} md={6}>
            <h3>Subscribe to Our Newsletter</h3>
            <div>
              {status === "sending" ? <Alert>Sending......</Alert> : ""}
              {status === "error" || status === "success" ? (
                <Alert>{[message]}</Alert>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  onChange={(e) => handleChange(e)}
                  value={email}
                  type="email"
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
