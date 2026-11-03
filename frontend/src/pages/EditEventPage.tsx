import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/forms/EventForm';
import type { EventFormData } from '../types/campus-event';
import NotFoundPage from './NotFoundPage';

export default function EditEventPage() {
  const { id } = useParams<{ id: string }>();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === (id ?? ''));

  if (!event) {
    return <NotFoundPage />;
  }

  const initialData: EventFormData = {
    ...event,
    capacity: String(event.capacity)
  };

  function handleSubmit(formData: EventFormData) {
    if (id) {
      updateEvent(id, formData);
      navigate('/admin');
    }
  }

  return (
    <div>
      <h2 className="bolum-baslik">Etkinliği Güncelle</h2>
      <EventForm
        initialData={initialData}
        submitText="Güncelle"
        onSubmit={handleSubmit}
      />
    </div>
  );
}