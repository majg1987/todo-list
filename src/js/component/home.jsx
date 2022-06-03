import React, { useState } from "react";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [alert, setAlert] = useState(false);

	function añadir(e) {
		if (e.key === "Enter") {
			if (tarea === "") {
				setAlert(true);
			}
			if (tarea.length > 0) {
				setAlert(false);
				tareas.push(tarea);
				setTarea("");
			}
		}
	}

	return (
		<div className="container">
			<h1 className="text-center text-warning fw-bolder ">To Do List</h1>
			<div className="input-group flex-nowrap">
				<input
					type="text"
					className="form-control mx-auto border border-info text-info fw-bolder"
					placeholder="Introduce tu Tarea"
					aria-label="Username"
					aria-describedby="addon-wrapping"
					onChange={(e) => setTarea(e.target.value)}
					onKeyDown={añadir}
					value={tarea}
				/>
			</div>
			<Card tareas={tareas} setTareas={setTareas} />
			<div
				className={`${
					alert ? "alert alert-danger mt-4 mx-auto alerta" : ""
				}`}
				role="alert">
				{`${alert ? "No puedes insertar una tarea vacia" : ""}`}
			</div>
		</div>
	);
};

export default Home;
