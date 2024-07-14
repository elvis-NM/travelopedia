import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import { useState } from "react";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  //const [updateDestination] = useUpdateDestinationMutation();

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px splod #333",
      }}
    >
      <div className="col-3 offset-3">
        {destination.city}, {destination.country}
      </div>
      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-3">
        <button
          className="btn btn-warning m-1"
          onClick={() => {
            setIsUpdating(!isUpdating);
          }}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? <button className="btn btn-primary">Update</button> : ""}
        <button
          className="btn btn-danger "
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
