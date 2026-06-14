import { useState } from "react";
import { timelineEvents } from "../data/timeline";

function Timeline() {

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Línea de Tiempo
      </h1>

      <div className="flex flex-col gap-3">

        {timelineEvents.map((event) => (

          <button
            key={event.year}
            onClick={() =>
              setSelectedEvent(event)
            }
            className="border p-3 text-left"
          >

            <strong>
              {event.year}
            </strong>

            {" - "}

            {event.title}

          </button>

        ))}

      </div>

      {selectedEvent && (

        <div className="mt-8 border p-4">

          <h2 className="text-2xl font-bold">

            {selectedEvent.year}

          </h2>

          <h3 className="text-xl mb-3">

            {selectedEvent.title}

          </h3>

          <p>

            {selectedEvent.description}

          </p>

        </div>

      )}

    </div>
  );
}

export default Timeline;