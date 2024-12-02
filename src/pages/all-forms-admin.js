import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Button, Form, DropdownButton, Dropdown } from "react-bootstrap";

const AllFormAdmin = () => {
  const [formData, setFormData] = useState({
    donerUsername: "",
    cause: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/donation",
      formData
    );
    console.log("🚀 ~ handleSubmit ~ response:", response);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOption] = useState(['Option 1', 'Option 2', 'Option 3', 'satyam', 'Anuj Kumar Singh', 'Aryan', 'Anju', 'Anil', 'Ram', 'Ramdhari', 'Ram awadh', 'Ram bachchan', 'Ramavatar']);

  const handleOptionSelect = (e) => {
    const { name, value } = e.target;
    const arr = options.filter((item) => item.includes(value))
    setOption(arr)
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  const handleOptionClick = (option) => {
    setFormData({ ...formData, donerUsername: option });
    setShowDropdown(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Add Donation</h2>
          <div>
            <Form.Group controlId="donerUsername">
              <Form.Label>Doner Username</Form.Label>
              <Form.Control type="text" name="donerUsername" value={formData.donerUsername} onChange={handleOptionSelect} 
          onFocus={handleFocus}
          onBlur={handleBlur} />
            </Form.Group>
            {showDropdown && (
        <div style={{ maxHeight: '150px', overflowY: 'scroll', border: '1px solid #ccc' }}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer', padding: '5px' }}>
              {option}
            </div>
          ))}
        </div>
      )}
            
            
            <Form.Group controlId="selectField">
              <Form.Label>Cause</Form.Label>
              <Form.Control
                as="select"
                name="cause"
                value={formData.cause}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="education">Education</option>
                <option value="environment">Plantation</option>
                <option value="food-distribution">Food Distribution</option>
                <option value="any">Any</option>
                {/* Add more options if needed */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Donation Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateField">
              <Form.Label>Date Field</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllFormAdmin;
