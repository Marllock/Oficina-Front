import "../Styles/addalunos.css";
import { Form, Input, Button } from "antd";
import { SideBar } from "../Components/Sidebar";
import { useEducational } from '../hooks/useEducational';
import { useState, useEffect } from 'react';

function AddAlunos() {

  const [form, setForm] = useState<any>(null);
  const [errorPost, sendPostRequest] = useEducational();

  function handle(e: any) {
    const newform={...form}
    newform[e.target.id] = e.target.value
    setForm(newform)
    console.log(newform)
  }

  useEffect(()=>{
    sendPostRequest('student',"post",{
      userName: form.userName,
      userEmail: form.userEmail,
      userDocument: form.userDocument,
      userBirthDate: form.userStreet,
      userTelephone: form.userTelephone,
      userAddress: {
        userStreet: "Rua Joaquim Dias Castanho",
        userStreetNumber: "280",
        userComplement: "Apto 180",
        userDistrict: form.userDistrict,
        userZipCode: form.userZipCode,
        userState: "Parana",
        userCity: form.userCity
      },
      "userProfile": 1,
      "courseId": form.courseId},{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
  },[]);



  return (
    <div className="page_add_aluno">
      <SideBar />
      <div className="centered-container">
        <div className="title-container">Cadastrar Aluno</div>
        <Form className="form-user-cad">
          <div>
            <label>Email</label>
            <Form.Item name={["user", "Email"]} rules={[{ type: "email" }]}>
              <Input onChange={(e) => handle(e)} value={form.userEmail} />
            </Form.Item>
          </div>

          <div>
            <label>Cep</label>
            <Form.Item
              name={["user", "ZipCode"]}
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <Input required onChange={(e) => handle(e)} value={form.userZipCode} />
            </Form.Item>
          </div>

          <div>
            <label>Nome Completo</label>
            <Form.Item name={["user", "Name"]} rules={[{ required: true }]}>
              <Input onChange={(e) => handle(e)} value={form.userName} />
            </Form.Item>
          </div>

          <div>
            <label>Cidade</label>
            <Form.Item name={["user", "City"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userCity} />
            </Form.Item>
          </div>

          <div>
            <label>CPF</label>
            <Form.Item name={["user", "Document"]} rules={[{ type: "number" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userDocument} />
            </Form.Item>
          </div>

          <div>
            <label>Bairro</label>
            <Form.Item name={["user", "District"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userDistrict} />
            </Form.Item>
          </div>

          <div>
            <label>Telefone</label>
            <Form.Item name={["user", "Telephone"]} rules={[{ type: "number" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userTelephone} />
            </Form.Item>
          </div>

          <div>
            <label>Rua</label>
            <Form.Item name={["user", "Street"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userStreet} />
            </Form.Item>
          </div>

          <div>
            <label>Data de Nascimento</label>
            <Form.Item name={["user", "BirthDate"]} rules={[{ type: "date" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userBirthDate} />
            </Form.Item>
          </div>

          <div>
            <label>Curso</label>
            <Form.Item name={["course", "Id"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.courseId} />
            </Form.Item>
          </div>
          <Form.Item className="center-btn" wrapperCol={{ offset: 3 }}>
            <Button className="btn-btn" type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddAlunos;