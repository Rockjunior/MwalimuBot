import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h1>{t('welcome')}</h1>
      <p>AI-powered homework help for busy parents. Ask questions via text, image, or voice and get simple, friendly answers.</p>
      <Link to="/login"><button>{t('login')}</button></Link>
      <Link to="/signup"><button style={{ marginLeft: 8 }}>{t('signup')}</button></Link>
    </div>
  );
}

export default HomePage; 