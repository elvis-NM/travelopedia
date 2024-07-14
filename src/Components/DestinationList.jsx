import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const [deleteDestination] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
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
            <div>
              {destination.city}, {destination.country}
            </div>
            <button
              className="btn form-control btn-danger"
              onClick={() => deleteDestination({ id: destination.id })}
            >
              Delete
            </button>
          </div>
          <div className="col-1 text-warning">
            {destination.daysNeeded} days
          </div>
          <div className="col-2"></div>
        </div>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
