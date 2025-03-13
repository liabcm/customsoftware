import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.cardBackground};
  text-align: center;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textColor};
`;

const FormStyled = styled.form`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  min-width: 30rem;
  margin: 0 auto;
  display: block;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  min-width: 30rem;
  margin: 0 auto;
  display: block;
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 0.75rem;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#95a5a6' : theme.primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.primaryColor};
    filter: brightness(90%);
  }
  min-width: 30rem;
  margin: 0 auto;
  display: block;
`;

const Message = styled.p<{ success?: boolean }>`
  color: ${({ success }) => (success ? 'green' : 'red')};
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setFormStatus('idle');
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email && !formData.phone)
      newErrors.contact = 'Email or phone is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    emailjs
      .send(
        'service_ssohbix',
        'template_x1zwvh3',
        formData,
        'mqm8w6J08g3d8eRy1'
      )
      .then(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => setFormStatus('error'))
      .finally(() => setSending(false));
  };

  return (
    <FormSection id='contact'>
      <Heading>Get in Touch</Heading>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <Message>{errors.name}</Message>}
        <Input
          type='email'
          name='email'
          placeholder='Your Email (optional)'
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type='tel'
          name='phone'
          placeholder='Your Phone (optional)'
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.contact && <Message>{errors.contact}</Message>}
        <Textarea
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <Message>{errors.message}</Message>}
        <Button type='submit' disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </Button>
        {formStatus === 'success' && (
          <Message success>Thank you! We’ll get back to you soon.</Message>
        )}
        {formStatus === 'error' && (
          <Message>There was an error. Please try again.</Message>
        )}
      </FormStyled>
    </FormSection>
  );
};

export default ContactForm;
