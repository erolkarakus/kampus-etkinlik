import { Link } from 'react-router-dom';
import type { CampusEvent } from '../../types/campus-event';

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <div className="etkinlik-karti">
      <h3>{event.title}</h3>
      <p><strong>Tarih:</strong> {event.date} - {event.time}</p>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Yer:</strong> {event.location}</p>
      <Link className="buton" to={`/events/${event.id}`}>Detayları Gör</Link>
    </div>
  );
}