export const ConnectToAPI = async (url: string, body: string) => {
  const jwt =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY0ODcwMmYyM2M0NDNmODVmMmJmZmZiZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluIiwiZXhwIjoxNjg5NDgyMDAxLCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.Vxx8TEcm3UUvZD7EewrzGG8MgsS99xi-Iuec45n9PfA";

  const token = "bearer " + jwt;

  // Perform API Call
  const res = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  // RESPONSE
  const data = await res.json();

  // Handling Error
  if (data.rStatus !== 0) throw new Error(data.rData.rMessage);

  console.log("EVENT_ID: " + data.eventID);

  // returning data if no error occured
  return data.rData;
};
