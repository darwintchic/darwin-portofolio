'use client';
import React,{useState} from "react";
import styled from 'styled-components';
import { Col, Row, Alert } from "react-bootstrap";

export default function Newsletter(){
    const [formData, setFormData] = useState({
      email: '',
     });

    const [responseMessage, setResponseMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.status === 200) {
            setResponseMessage('Abonné(e) à la newsletter avec succès.');
            setMessageType('success');

            // Vider les champs du formulaire après 10 secondes
            setTimeout(() => {
                setFormData({
                    email: '',
                });
                setResponseMessage('');
                setMessageType('');
            }, 5000); // 5000 millisecondes = 5secondes
        } else {
            setResponseMessage(data.errors ? data.errors.join(' ') : 'Erreur inconnue.');
            setMessageType('error');
        }
    };

  return (
     <FormStyle>
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
              <Col lg={12}>
                   {responseMessage && (
                            <p
                                className="text-center p-2"
                                style={{
                                    color: messageType === 'success' ? '#3e8e41' : 'red',
                                    fontSize: '18px'
                                }}
                            >
                                {responseMessage}!!!
                            </p>
                        )}
              </Col>
          </Row>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h4>Abonnez-vous à ma newsletter<br/> & Ne manquez jamais les dernières mises à jour.</h4>
             
            </Col>
            <Col md={6} xl={7} className="form-lg d-lg-block d-xlg-block d-md-none d-sm-none d-none">
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input  type="email"  placeholder="Address Email" required name="email" value={formData.email} onChange={handleChange}/>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>

            {/** Start newsletter sm **/}
            <Col md={12} xl={12} className='form-xs d-lg-none d-xlg-none d-block d-sm-block d-md-block'>
              <form onSubmit={handleSubmit}>
                
                  <input type="email" style={{border:'1px solid #121212'}}  required placeholder="Address Email" className="form-control p-3" name="email" value={formData.email} onChange={handleChange}/>
                  <br/>
                  <button type="submit" className="btn p-3" style={{background:'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',color:'#fff'}}>Submit</button>
                
              </form>
            </Col>
            {/** End small-screen **/}
          

          </Row>
        </div>
      </Col>


        
        
          


      </FormStyle>
  )
}

const FormStyle = styled.section`
.form-lg{
  display:block;
}

.form-xs{
  display:none;
}
@media(max-width:576px){
  .form-xs{
    display:block;
  }
  .form-lg{
    display:none;
  }
}
`