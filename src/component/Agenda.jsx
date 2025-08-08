import { useState } from "react";
import Modal from "./Helper";

export default function Agenda() {
    const date = new Date();
    return (
        <div className="h-full w-full">
            <div className="top-date">
                <TopDate date={date} />
            </div>
            <DaysOfWeek date={date}></DaysOfWeek>
        </div>
    )
}

function TopDate({ date }) {
    const formatted = date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    })

    return (
        <h2 className="text-[var(--text-color)] border-b-2 border-b-solid border-b-[var(--border-color)] text-2xl"><strong>{formatted}</strong></h2>
    )
}


function DaysOfWeek({ date }) {
    const [weekEvents, setWeekEvents] = useState([
        { day: 'Sun', events: [] },
        { day: 'Mon', events: [] },
        { day: 'Tue', events: [] },
        { day: 'Wed', events: [] },
        { day: 'Thu', events: [] },
        { day: 'Fri', events: [] },
        { day: 'Sat', events: [] },
    ])

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const order = []
    let getDayOfWeek = date.getDay()

    for (let i = 0; i < 7; i++) {
        order.push(getDayOfWeek)
        getDayOfWeek = (getDayOfWeek + 1) % 7
    }

    return (
        <div className="grid grid-cols-7 h-full text-center w-full overflow-auto hide-scrollbar">
            {order.map((dayIndex) => {
                const dayName = days[dayIndex]
                const dayData = weekEvents.find((d) => d.day === dayName)

                return (
                    <div
                        key={dayName}
                        className="text-[var(--text-color)] border-r-2 border-r-solid border-r-[var(--border-color)] last:border-r-0 h-full p-2 20%"
                    >
                        <p className="border-b-2 border-b-solid border-b-[var(--border-color)] w-full mb-2">
                            {dayName}
                        </p>

                        {dayData?.events.length > 0 ? (
                            dayData.events.map((event, i) => (
                                <div key={i} className="text-xs bg-[var(--accent-color)] mb-1 p-1 rounded w-full break-words whitespace-normal">
                                    {event.from && event.to
                                        ? `${event.title} (${event.from} - ${event.to})`
                                        : `${event.title} (All day)`
                                    }
                                </div>

                            ))
                        ) : (
                            <p className="text-xs text-gray-500">No Events</p>
                        )}

                        <Modal day={dayName} weekEvents={weekEvents} setWeekEvents={setWeekEvents} />
                    </div>
                )
            })}
        </div>
    )
}
