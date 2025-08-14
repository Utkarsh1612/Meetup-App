import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(
    `https://meetup-beckend.vercel.app/eventdetails/${eventId}`
  );
  return (
    <div className="bg-body-tertiary">
      <Header />
      <main style={{ height: "1050px" }}>
        {loading && <p className="text-center pt-5">Loading...</p>}
        {data && (
          <section className="container">
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h1 className="py-3">{data.title}</h1>
                <div>
                  <p>
                    Hosted By:
                    <br />
                    <strong>{data.hostedBy}</strong>
                  </p>
                </div>
                <div className="mt-5 mb-4">
                  <img className="w-75" src={data.imageUrl} alt="event img" />
                </div>
                <h3 className="">Details:</h3>
                <p>{data.details}</p>
                <h3>Additional Information:</h3>
                <p>
                  <strong>Dress Code: </strong>
                  {data.additionalInfo.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions: </strong>
                  {data.additionalInfo.ageRestrictions}
                </p>
                <h3>Event Tags:</h3>
                <div className="mt-4 mb-5">
                  {data.eventTags.map((tag) => (
                    <span className="bg-danger p-3 me-3 rounded text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card" style={{ width: "320px" }}>
                  <div className="card-body">
                    <div className="d-flex">
                      <span className="me-2">🕜</span>
                      <p>
                        {data.eventDate} at {data.startTime} to {data.eventDate}{" "}
                        at {data.endTime}
                      </p>
                    </div>
                    <div className="d-flex">
                      <span className="me-2 ms-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                      </span>
                      <p>{data.address}</p>
                    </div>
                    <div className="d-flex">
                      <span className="me-2 ms-2">
                        <strong>₹</strong>
                      </span>
                      <p>{data.ticketPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3>Speakers:({data.speakers.length})</h3>
                  <div className="row">
                    {data.speakers.map((speaker) => (
                      <div className="col-md-4">
                        <div
                          className="card text-center"
                          style={{ width: "200px" }}
                        >
                          <img
                            src={speaker.imgUrl}
                            alt="speakerImage"
                            className="rounded-circle ms-4 mt-2"
                            style={{ width: "150px", height: "125px" }}
                          />
                          <div className="card-body">
                            <p>
                              <strong>{speaker.name}</strong>
                              <br />
                              {speaker.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
export default EventDetails;
