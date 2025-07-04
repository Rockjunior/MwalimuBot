import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Call backend for signup
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    // TODO: Google OAuth
    alert('Google signup not implemented');
  };

  return (
    <div style={{ padding: 24, maxWidth: 320, margin: 'auto' }}>
      <h2>{t('signup')}</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit" style={{ width: '100%' }}>{t('signup')}</button>
      </form>
      <button onClick={handleGoogleSignup} style={{ width: '100%', marginTop: 8 }}>Sign Up with Google</button>
    </div>
  );
}

export default SignupPage; 