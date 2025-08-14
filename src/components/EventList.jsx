import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const EventList = ({ searchTerm }) => {
  const [type, setType] = useState("Both");
  const { data, loading, error } = useFetch(
    "https://meetup-beckend.vercel.app/events"
  );
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (data) {
      const searchResult = data.filter((event) => {
        const search = searchTerm.toLowerCase();
        const title = event.title.toLowerCase();
        const tags = event.eventTags.map((tag) => tag.toLowerCase());
        return title.includes(search) || tags.join(", ").includes(search);
      });
      setFilteredEvents(searchResult);
      if (searchTerm === "") {
        handleTypeSelect(type);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    if (data) {
      setFilteredEvents(data);
    }
  }, [data]);

  const handleTypeSelect = (value) => {
    setType(value);
    let filteredData;
    if (data) {
      filteredData =
        value === "Online"
          ? data.filter((eventData) => eventData.type === "Online")
          : value === "Offline"
          ? data.filter((eventData) => eventData.type === "Offline")
          : data;
    }
    setFilteredEvents(filteredData);
  };

  return (
    <section className="bg-body-tertiary">
      <div className="container">
        <hr />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="py-3">Meetup Events</h1>
          <select
            onChange={(event) => handleTypeSelect(event.target.value)}
            className="rounded"
            name="eventType"
            id="eventType"
          >
            <option value="">Select Event Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </div>
        {loading && <p>Loading...</p>}
        <div className="row">
          {filteredEvents &&
            filteredEvents.length > 0 &&
            filteredEvents.map((event) => (
              <div className="col-md-4 mb-4" key={event._id}>
                <div className="card">
                  <img
                    style={{ height: "300px" }}
                    className="card-img-top"
                    src={event.imageUrl}
                    alt="event-photo"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <p>
                        <small>
                          {event.eventDate} • {event.startTime} IST
                        </small>
                      </p>
                      <Link
                        to={`/eventdetails/${event._id}`}
                        className="btn btn-primary"
                      >
                        more Info
                      </Link>
                    </div>
                    <h5>{event.title}</h5>
                  </div>
                  <div className="position-absolute top-0 start-0 m-2 bg-white rounded px-2 py-1">
                    <span className="">{event.type} Event</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
