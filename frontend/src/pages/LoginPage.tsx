import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface LoginErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: LoginErrors = {};

    if (!email.includes('@')) {
      found.email = 'Geçerli bir e-posta girin.';
    }
    if (password.length < 6) {
      found.password = 'Şifre en az 6 karakter olmalı.';
    }

    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
    }
  }

  return (
    <div className="auth-kapsayici">
      <h2 className="bolum-baslik">Giriş Yap</h2>
      {sent && <p className="mesaj mesaj-basari">Giriş başarılı! (Demo)</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grup">
          <label htmlFor="email">E-posta:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          {errors.email && <span className="hata-metni">{errors.email}</span>}
        </div>

        <div className="form-grup">
          <label htmlFor="password">Şifre:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          {errors.password && <span className="hata-metni">{errors.password}</span>}
        </div>

        <button type="submit" className="buton">Giriş Yap</button>
      </form>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/forgot-password">Şifremi unuttum</Link>
        <Link to="/register">Kayıt ol</Link>
      </div>
    </div>
  );
}