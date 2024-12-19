import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/api'; // ��������� �� getEvents

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                setEvents(response.data); // ��������� ���������� ������
            } catch (error) {
                console.error('������ ��� �������� �������:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>������ �������</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
