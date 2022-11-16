import {Form,Input,} from 'antd';
import '../Styles/cadastro.css';
  

  export const Registration = () =>{
    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
  
    return (
      <Form
        className='form-register'
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >

        <label>Nome</label>
        <Form.Item
          name="Nome"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <label>Email</label>
        <Form.Item
          name="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          
          <label>CPF</label>
        <Form.Item
          name="CPF"
          rules={[
            {
              type: 'number',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <label>Identificação Institucional</label>
        <Form.Item
          name="Identificação"
          rules={[
            {
              type: 'number',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

          <label>Senha</label>
        <Form.Item
          name="Senha"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <label>Confirmação de Senha</label>
        <Form.Item
          name="Confirmar"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        

      </Form>
    );
  };