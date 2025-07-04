import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Call backend for login
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // TODO: Google OAuth
    alert('Google login not implemented');
  };

  return (
    <div style={{ padding: 24, maxWidth: 320, margin: 'auto' }}>
      <h2>{t('login')}</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit" style={{ width: '100%' }}>{t('login')}</button>
      </form>
      <button onClick={handleGoogleLogin} style={{ width: '100%', marginTop: 8 }}>Login with Google</button>
    </div>
  );
}

export default LoginPage; 