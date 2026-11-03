import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h2 className="bolum-baslik">Sayfa bulunamadı</h2>
      <p>Aradığınız sayfa ya da etkinlik yok.</p>
      <Link className="buton" to="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        Ana sayfaya dön
      </Link>
    </div>
  );
}