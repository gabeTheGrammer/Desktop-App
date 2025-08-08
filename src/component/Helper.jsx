import React, { useState } from 'react'

export default function Modal({ day, weekEvents, setWeekEvents }) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setEvent] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleSave = () => {
    const newEvent = { title, from, to }

    // Update the correct day in weekEvents
    const updatedEvents = weekEvents.map(d => {
      if (d.day === day) {
        return { ...d, events: [...d.events, newEvent] }
      }
      return d
    })

    setWeekEvents(updatedEvents)
    setIsOpen(false)
    setEvent('')
    setFrom('')
    setTo('')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-[var(--text-color)] rounded"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[var(--bg-color)] p-6 rounded-lg shadow-lg w-80 relative border-2 border-solid border-[var(--border-color)]">
            <h2 className="text-lg text-[var(--text-color)] font-semibold mb-4">Add Event</h2>
            <div className='w-full flex justify-between'>
                <label className='w-[25%] mr-2'>Event: </label>
                <input className="w-[75%] border-2 border-solid border-[var(--border-color)] rounded-lg text-[var(--text-color)]" onChange={(e) => setEvent(e.target.value)} type="text"></input>
            </div>
            <div className='w-full flex justify-between'>
                <label className='w-[25%] mr-2'>From: </label>
                <input type="time" className="w-[75%] border-2 border-solid border-[var(--border-color)] rounded-lg text-[var(--text-color)]" onChange={(e) => setFrom(e.target.value)}></input>
            </div>
            <div className='w-full flex justify-between'>
                <label className='w-[25%] mr-2'>To: </label>
                <input type="time" className="w-[75%] border-2 border-solid border-[var(--border-color)] rounded-lg text-[var(--text-color)]" onChange={(e) => setTo(e.target.value)}></input>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-[var(--text-color)] hover:text-gray-800"
            >
              ✕
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 bg-[var(--accent-color)] py-2 text-[var(--text-color)] rounded"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="mt-2 px-4 bg-[var(--accent-color)] py-2 text-[var(--text-color)] rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  )
}