import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventsContext';

export default function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className="bolum-baslik">Etkinlik Yönetimi</h2>
        <Link className="buton" to="/admin/new">+ Yeni Etkinlik</Link>
      </div>

      <table className="tablo">
        <thead>
          <tr>
            <th>Etkinlik</th>
            <th>Tarih</th>
            <th>Kategori</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.id}>
              <td data-baslik="Etkinlik: ">{e.title}</td>
              <td data-baslik="Tarih: ">{e.date}</td>
              <td data-baslik="Kategori: ">{e.category}</td>
              <td className="islemler" data-baslik="İşlem: ">
                <Link className="buton" to={`/admin/${e.id}/edit`}>Düzenle</Link>
                <button
                  className="buton buton-sil"
                  onClick={() => handleDelete(e.id, e.title)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}