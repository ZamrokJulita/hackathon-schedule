import { useState } from 'react'
import './App.css'
import { days } from "./schedule";
import hackduck from "./assets/hackduck_z_reka.png"

function App() {
  const [activeDayId, setActiveDayId] = useState(days[0]?.id);

  const activeDay = days.find((d) => d.id === activeDayId);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Harmonogram BEST Coding Marathon</h1>
        <p>Sprawdź, co dzieje się w poszczególne dni wydarzenia.</p>
      </header>

      <nav className="tabs">
        {days.map((day) => (
          <button
            key={day.id}
            className={`tab ${day.id === activeDayId ? "tab--active" : ""}`}
            onClick={() => setActiveDayId(day.id)}
          >
            {day.label}
          </button>
        ))}
      </nav>

      <main className="schedule">
        {activeDay ? (
          <>
            <h2 className="schedule-title">{activeDay.label}</h2>
            <ul className="schedule-list">
              {activeDay.items.map((item, index) => (
                <li key={index} className="schedule-item">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-content">
                    <div className="schedule-header">
                      <h3>{item.title}</h3>
                      {item.type && (
                        <span className={`badge badge--${item.type}`}>
                          {item.type}
                        </span>
                      )}
                    </div>
                    {item.location && (
                      <p className="schedule-location">{item.location}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Brak danych dla tego dnia.</p>
        )}
      </main>

      <img
        src={hackduck}
        alt="Hackduck"
        className="background-hackduck"
      />
    </div>
  );
}

export default App;
