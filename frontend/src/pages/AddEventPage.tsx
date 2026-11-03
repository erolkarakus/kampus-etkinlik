import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';
import EventForm from '../components/forms/EventForm';
import type { EventFormData } from '../types/campus-event';

const emptyForm: EventFormData = {
  title: '',
  category: '',
  date: '',
  time: '',
  location: '',
  capacity: '',
  description: ''
};

export default function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  function handleSubmit(formData: EventFormData) {
    addEvent(formData);
    navigate('/admin');
  }

  return (
    <div>
      <h2 className="bolum-baslik">Yeni Etkinlik Ekle</h2>
      <EventForm
        initialData={emptyForm}
        submitText="Kaydet"
        onSubmit={handleSubmit}
      />
    </div>
  );
}