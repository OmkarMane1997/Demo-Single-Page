import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

const Contact = () => {
  return (
    <div id="Contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get In Touch</h2>
          <p>Provide some Info,Our Team Will be contact You!</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="Full Name"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="Telephone"
            rules={[
              {
                required: true,
                message: "Please input your Telephone!",
              },
            ]}
          >
            <Input type="number" placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="Subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Input type="text" placeholder="Subject" />
          </Form.Item>

          <Form.Item
            name="Message"
            rules={[
              {
                required: true,
                message: "Please input your Message!",
              },
            ]}
          >
            <TextArea rows={4} placeholder="Message" />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I have read the agreement
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Contact;
