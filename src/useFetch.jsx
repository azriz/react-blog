import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch(url) // Fetching data from our endpoint
      .then(response => { // Handling the response
        if(!response.ok) { // If ok status not given, throw error
          throw Error("There has been an error...failed to fetch data"); // Error message defined
        }
        return response.json(); // Return data as JSON
      })
      .then(data => {
        setData(data); // Insert received data as new blogs state
        setIsPending(false); // Set pending state to false so loading message no longer shows in below JSX
        setError(null); // Set error state to null to remove error message display in below JSX
      })
      .catch(error => {
        setError(error.message); // Set error state to the message defined above
        setIsPending(false); // Set pending state to false so loading message no longer shows in below JSX
      })
  }, [url]); // URL added as dependency so useEffect only runs on initial render plus every time this URL is fetched or changed

  return { data, isPending, error }; // Return as an object with these 3 properties, objected used over array so any can be extracted without the others

}
 
export default useFetch;