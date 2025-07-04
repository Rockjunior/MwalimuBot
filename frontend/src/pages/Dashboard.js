import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8000';

function Dashboard() {
  const { t } = useTranslation();
  const [question, setQuestion] = useState('');
  const [file, setFile] = useState(null);
  const [voice, setVoice] = useState(null);
  const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAsk = async (type) => {
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      let res;
      if (type === 'text') {
        res = await axios.post(`${API_BASE}/questions/text`, {
          question,
          language: 'en', // TODO: Use selected language
        });
      } else if (type === 'image' && file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('language', 'en');
        res = await axios.post(`${API_BASE}/questions/image`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else if (type === 'voice' && voice) {
        const formData = new FormData();
        formData.append('file', voice);
        formData.append('language', 'en');
        res = await axios.post(`${API_BASE}/questions/voice`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        setError('Please provide the required input.');
        setLoading(false);
        return;
      }
      setAnswer(res.data);
      setHistory([...history, { question: type === 'text' ? question : type, answer: res.data.answer }]);
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>{t('ask_question')}</h2>
      <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Type your question..." style={{ width: '100%', marginBottom: 8 }} />
      <button onClick={() => handleAsk('text')} disabled={loading}>Ask (Text)</button>
      <div style={{ margin: '16px 0' }}>
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
        <button onClick={() => handleAsk('image')} disabled={loading}>Ask (Image)</button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <input type="file" accept="audio/*" onChange={e => setVoice(e.target.files[0])} />
        <button onClick={() => handleAsk('voice')} disabled={loading}>Ask (Voice)</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {answer && (
        <div style={{ marginTop: 16 }}>
          <h3>Answer</h3>
          <p>{answer.answer}</p>
          <ul>
            {answer.tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      )}
      <div style={{ marginTop: 32 }}>
        <h3>History</h3>
        <ul>
          {history.map((h, i) => <li key={i}>{h.question} - {h.answer}</li>)}
        </ul>
      </div>
      <div style={{ marginTop: 32 }}>
        <h3>Billing</h3>
        <p>Pay-per-use and subscription info here (placeholder).</p>
      </div>
    </div>
  );
}

export default Dashboard; 