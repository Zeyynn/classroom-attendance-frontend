import React, { useEffect, useState } from "react";
import { get } from "../API/api";

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await get("/classes");
      setClasses(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Classes</h1>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <ul>
          {classes.map((cls) => (
            <li key={cls.id}>{cls.class_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
