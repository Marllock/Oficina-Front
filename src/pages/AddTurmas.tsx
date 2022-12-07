import "../Styles/addturmas.css";
import { Form, Input, Button } from "antd";
import { SideBar } from "../Components/Sidebar";
import { useState } from 'react';
import axios from "axios";

function AddTurmas() {
  const url="http://localhost:8080/v1/student"
  const [form, setForm] = useState({
    courseId:"",
    professorId:""
  });


  function handle(e: any) {
    const newform: any={...form};
    newform[e.target.id] = e.target.value
    setForm(newform)
  }

  function submit(e: any){
    e.preventDefault();
    axios.post(url,{
        courseId: form.courseId,
        professorId: form.professorId
      })
        .then(res =>{
          console.log(res.data)
        })
    }
  
  return (
    <div className="page_add_aluno">
      <SideBar />
      <div className="centered-container">
        <div className="title-container">Cadastrar Turma</div>
        <Form onSubmitCapture={(e)=> submit(e)} className="form-turma-cad">
          <div>
            <label>Curso</label>
            <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
              <Input onChange={(e) => handle(e)} value={form.courseId}/>
            </Form.Item>
          </div>

          <div>
            <label>Professor Responsavel</label>
            <Form.Item
              name={['user', 'cep']}
              rules={[
                {
                  type: 'number'
                }
              ]}
            >
              <Input required onChange={(e) => handle(e)} value={form.professorId} />
            </Form.Item>
          </div>

          <Form.Item className="center-btn" wrapperCol={{ offset: 1 }}>
            <Button className="btn-btn-turma" type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddTurmas
