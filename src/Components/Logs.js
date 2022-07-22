import { useState, useEffect } from "react";
import Log from "./Log.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/logs`)
      .then((response) => { setLogs(response.data) })
      .catch((error) => { console.error(error) })
  },[])

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;