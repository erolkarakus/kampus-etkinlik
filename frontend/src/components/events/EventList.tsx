import type { CampusEvent } from '../../types/campus-event';
import EventCard from './EventCard';

interface EventListProps {
  events: CampusEvent[];
}

export default function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return <p className="bilgi-metni">Henüz etkinlik bulunmuyor.</p>;
  }

  return (
    <div className="etkinlik-listesi">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}