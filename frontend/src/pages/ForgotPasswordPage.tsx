import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Geçerli bir e-posta girin.');
      return;
    }
    setError('');
    setSent(true);
  }

  return (
    <div className="auth-kapsayici">
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <p style={{ marginBottom: '1rem' }}>Kayıtlı e-posta adresinizi girin, sıfırlama bağlantısı gönderelim.</p>
      {sent && (
        <p className="mesaj mesaj-basari">
          Bağlantı <strong>{email}</strong> adresine gönderildi (demo).
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grup">
          <label htmlFor="forgot-email">E-posta:</label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>
        <button type="submit" className="buton">Bağlantı Gönder</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </div>
  );
}