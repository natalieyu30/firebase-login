import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory()
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (err) {
      console.log(err.message)
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
          { error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef}></Form.Control>
            </Form.Group>
            
            <Button disabled={loading} type='submit' className='w-100 btn-info'>Log In</Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to='/forgot-password' className='text-info'>Forgot Password</Link>
          </div>
        </Card.Body>
      </Card> 
      <div className="w-100 text-center mt-2">
        Need an account? <Link to='/signup' className='text-info'>Sign Up</Link>
      </div>
    </>
  )
}

export default Login


