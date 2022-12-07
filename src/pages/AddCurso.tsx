import "../Styles/addcurso.css";
import { Form, Input, Button } from "antd";
import { SideBar } from "../Components/Sidebar";
import { useState } from 'react';
import axios from "axios";

function AddCurso() {
  const url="http://localhost:8080/v1/course"
  const [form, setForm] = useState({
    "courseName": "",
	  "courseCode": ""
  });


  function handle(e: any) {
    const newform: any={...form};
    newform[e.target.id] = e.target.value
    setForm(newform)
  }

  function submit(e: any){
    e.preventDefault();
    axios.post(url,{
      courseName: form.courseName,
      courseCode: form.courseCode
        })
        .then(res =>{
          console.log(res.data)
        })
    }
  
  return (
    <div className="page_add_aluno">
      <SideBar />
      <div className="centered-container">
        <div className="title-container">Cadastrar Curso</div>
        <Form className="form-curso-cad" onSubmitCapture={(e)=> submit(e)}>
          <div>
            <label>Nome do Curso</label>
            <Form.Item name={["Nome do Curso"]} rules={[{ type: "email" }]}>
              <Input onChange={(e) => handle(e)} value={form.courseName} />
            </Form.Item>
          </div>

          <div>
            <label>Codigo do Curso</label>
            <Form.Item
              name={["Codigo do Curso"]}
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input required onChange={(e) => handle(e)} value={form.courseCode} />
            </Form.Item>
          </div>
          <Form.Item className="center-btn" wrapperCol={{ offset: 1 }}>
            <Button className="btn-btn-curso" type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddCurso
