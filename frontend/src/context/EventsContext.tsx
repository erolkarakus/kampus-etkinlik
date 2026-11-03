import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { CampusEvent, EventFormData } from '../types/campus-event';
import * as eventsData from '../data/events';

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    category: data.category as CampusEvent['category'],
    capacity: Number(data.capacity),
    description: data.description.trim()
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(() => {
    // data/events içinden hangi isimle export edildiyse otomatik bulur
    const anyData = eventsData as any;
    return anyData.initialEvents || anyData.events || anyData.CAMPUS_EVENTS || anyData.default || [];
  });

  function addEvent(data: EventFormData) {
    const newEvent = toEvent(`event-${Date.now()}`, data);
    setEvents((prev) => [...prev, newEvent]);
  }

  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? toEvent(id, data) : e))
    );
  }

  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents(): EventsContextValue {
  const value = useContext(EventsContext);
  if (value === null) {
    throw new Error('EventsProvider yok!');
  }
  return value;
}