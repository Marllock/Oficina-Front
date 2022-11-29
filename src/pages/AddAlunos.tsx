import "../Styles/addalunos.css";
import { Form, Input, Button } from "antd";
import { SideBar } from "../Components/Sidebar";

function AddAlunos() {
  return (
    <div className="page_add_aluno">
      <SideBar />
      <div>
        <Form className="form-user-cad">
          <div>
            <label>Email</label>
            <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
              <Input />
            </Form.Item>
          </div>

          <div>
            <label>Cep</label>
            <Form.Item
              name={["user", "cep"]}
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Nome Completo</label>
            <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </div>

          <div>
            <label>Cidade</label>
            <Form.Item name={["user", "cidade"]} rules={[{ type: "string" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>CPF</label>
            <Form.Item name={["user", "cpf"]} rules={[{ type: "number" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Bairro</label>
            <Form.Item name={["user", "bairro"]} rules={[{ type: "string" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Telefone</label>
            <Form.Item name={["user", "telefone"]} rules={[{ type: "number" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Rua</label>
            <Form.Item name={["user", "rua"]} rules={[{ type: "string" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Data de Nascimento</label>
            <Form.Item name={["user", "nascimento"]} rules={[{ type: "date" }]}>
              <Input required />
            </Form.Item>
          </div>

          <div>
            <label>Curso</label>
            <Form.Item name={["user", "curso"]} rules={[{ type: "string" }]}>
              <Input required />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddAlunos;
