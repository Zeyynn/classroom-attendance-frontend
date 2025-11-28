import { useState, useEffect } from "react";
import { get } from "../api/api";

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    get("/classes") 
      .then((data) => setClasses(data))
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Classes</h2>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <ul>
          {classes.map((c) => (
            <li key={c.id}>{c.class_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
