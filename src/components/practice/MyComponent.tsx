import { useState } from "react";
import { ConnectToAPI } from "../../utils/utility";

function MyComponent() {
  const [data, setData] = useState<
    {
      stateId: string;
      stateName: string;
      createdDate: string;
      status: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      // fetching data from api
      const body = JSON.stringify({
        eventID: "0005",
        addInfo: {
          page: 1,
          pageSize: 29,
        },
      });

      console.log(body);

      const jsondata = await ConnectToAPI(
        "http://210.210.210.31:30700/state",
        body
      );

      console.log(jsondata);

      //
      setData(jsondata.Data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
      // setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={fetchData}
        className="py-1 px-5 capitalize font-semibold bg-cyan-500 text-white rounded-full"
      >
        click to fetch data
      </button>
      {loading && <p>Loading....</p>}
      {!loading && error && <p> Failed to fetch data </p>}
      {!loading && (
        <div className="grid grid-cols-5 gap-3">
          {data.map((item) => (
            <div key={item.stateId} className="border p-4 capitalize">
              <h3> {item.stateName} </h3>
              <p> {item.status} </p>
              <p> {item.createdDate} </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MyComponent;
