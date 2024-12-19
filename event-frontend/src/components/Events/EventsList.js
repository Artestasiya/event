import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/api'; // Исправить на getEvents

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                setEvents(response.data); // Применяем полученные данные
            } catch (error) {
                console.error('Ошибка при загрузке событий:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Список событий</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
