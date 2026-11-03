import type { EventFormData, EventFormErrors } from '../types/campus-event';

export function validateEvent(data: EventFormData): EventFormErrors {
  const errors: EventFormErrors = {};

  if (data.title.trim().length < 3) {
    errors.title = 'En az 3 karakter olmalı.';
  }

  if (data.category === '') {
    errors.category = 'Bir kategori seçin.';
  }

  if (!data.date.trim()) {
    errors.date = 'Tarih boş olamaz.';
  }

  if (!data.time.trim()) {
    errors.time = 'Saat boş olamaz.';
  }

  if (!data.location.trim()) {
    errors.location = 'Yer boş olamaz.';
  }

  const capacityNum = Number(data.capacity);
  if (!Number.isInteger(capacityNum) || capacityNum < 1 || capacityNum > 1000) {
    errors.capacity = '1 ile 1000 arası tam sayı.';
  }

  if (data.description.trim().length < 10) {
    errors.description = 'En az 10 karakter.';
  }

  return errors;
}