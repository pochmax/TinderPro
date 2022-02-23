import { useQuery } from "react-query";

const FINDWORK_API_TOKEN = "e7333bf8fff3598abfc6b4f8870223fe7d5c61a2";

async function fetchData() {
  const result = await fetch("https://findwork.dev/api/jobs/", {
    method: "get",
    headers: {
      Authorization: "Token" + FINDWORK_API_TOKEN,
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  console.log(result);
  return json;
}

export function useFindwork() {
  return useQuery(["results"], fetchData);
}
