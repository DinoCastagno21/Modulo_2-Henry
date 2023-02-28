import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Dino";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return (
    <div>
      <h1>El mejor de todos</h1>
      <h3>{studentName}</h3>
      <ul>
        {
          techSkills.map((p)=> <li key = {p}> {p}</li>)
        }
      </ul>
      <Botones alerts = {alerts}/>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
