import "../Styles/addprofessor.css";
import { Form, Input, Button } from "antd";
import { SideBar } from "../Components/Sidebar";
import { useState } from 'react';
import axios from "axios";

function AddProfessor() {
  const url="http://localhost:8080/v1/student"
  const [form, setForm] = useState({
    userName: "",
    userEmail:"",
    userDocument:"",
    userBirthDate:"",
    userStreet:"",
    userTelephone:"",
    userDistrict:"",
    userZipCode:"",
    userCity:"",
    courseId:""
  });


  function handle(e: any) {
    const newform: any={...form};
    newform[e.target.id] = e.target.value
    setForm(newform)
  }

  function submit(e: any){
    e.preventDefault();
    axios.post(url,{
      userName: form.userName,
      userEmail: form.userEmail,
      userDocument: form.userDocument,
      userBirthDate: form.userBirthDate,
      userTelephone: form.userTelephone,
        userAddress: {
          userStreet: form.userStreet,
          userStreetNumber: "280",
          userComplement: "Apto 180",
          userDistrict: form.userDistrict,
          userZipCode: form.userZipCode,
          userState: "Parana",
          userCity: form.userCity
        },
        "userProfile": 2,
        "courseId":form.courseId})
        .then(res =>{
          console.log(res.data)
        })
    }
  
  return (
    <div className="page_add_aluno">
      <SideBar />
      <div className="centered-container">
        <div className="title-container">Cadastrar Professor</div>
        <Form className="form-user-cad" onSubmitCapture={(e)=> submit(e)}>
          <div>
            <label>Email</label>
            <Form.Item name={["Email"]} rules={[{ type: "email" }]}>
              <Input onChange={(e) => handle(e)} value={form.userEmail}/>
            </Form.Item>
          </div>

          <div>
            <label>Cep</label>
            <Form.Item
              name={["Cep"]}
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input required onChange={(e) => handle(e)} value={form.userZipCode} />
            </Form.Item>
          </div>

          <div>
            <label>Nome Completo</label>
            <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
              <Input onChange={(e) => handle(e)} value={form.userName}/>
            </Form.Item>
          </div>

          <div>
            <label>Cidade</label>
            <Form.Item name={["user", "cidade"]} rules={[{ type: "string" }]}>
              <Input required  onChange={(e) => handle(e)} value={form.userCity}/>
            </Form.Item>
          </div>

          <div>
            <label>CPF</label>
            <Form.Item name={["user", "cpf"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userDocument}/>
            </Form.Item>
          </div>

          <div>
            <label>Bairro</label>
            <Form.Item name={["user", "bairro"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userDistrict}/>
            </Form.Item>
          </div>

          <div>
            <label>Telefone</label>
            <Form.Item name={["user", "telefone"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userTelephone}/>
            </Form.Item>
          </div>

          <div>
            <label>Rua</label>
            <Form.Item name={["user", "rua"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userStreet}/>
            </Form.Item>
          </div>

          <div>
            <label>Data de Nascimento</label>
            <Form.Item name={["user", "nascimento"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.userBirthDate}/>
            </Form.Item>
          </div>

          <div>
            <label>Curso</label>
            <Form.Item name={["user", "curso"]} rules={[{ type: "string" }]}>
              <Input required onChange={(e) => handle(e)} value={form.courseId}/>
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
  )
}

export default AddProfessor
