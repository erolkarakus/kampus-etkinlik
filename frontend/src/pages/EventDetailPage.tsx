import { useParams, Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import NotFoundPage from './NotFoundPage';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { events } = useEvents();

  const event = events.find((e) => e.id === (id ?? ''));

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <div className="etkinlik-karti" style={{ maxWidth: '650px', margin: '2rem auto' }}>
      <h2 className="bolum-baslik">{event.title}</h2>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Tarih:</strong> {event.date} - <strong>Saat:</strong> {event.time}</p>
      <p><strong>Yer:</strong> {event.location}</p>
      <p><strong>Kontenjan:</strong> {event.capacity}</p>
      <p style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>{event.description}</p>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <Link className="buton" to="/events">Listeye Dön</Link>
        <Link className="buton" to={`/admin/${event.id}/edit`}>Güncelle</Link>
      </div>
    </div>
  );
}