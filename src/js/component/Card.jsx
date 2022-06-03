import React, { useState } from "react";

const Card = ({ tareas, setTareas }) => {
	const eliminar = (element) => {
		let filter = tareas.filter((tarea) => {
			return tarea !== element;
		});
		setTareas(filter);
	};

	return (
		<>
			<div className="card tarjeta mt-3 mx-auto fw-bolder">
				<div className="card-body border border-info">
					<ul className="list-group-item border border-warning">
						{tareas.length === 0 ? (
							<p className="text-info text-center">
								Añade Tareas a la Lista
							</p>
						) : (
							tareas.map((element, index) => {
								return (
									<li
										key={index}
										className="d-flex justify-content-between text-info p-2">
										{element}
										<button
											onClick={() => eliminar(element)}
											className="bg-danger rounded-circle text-white border-0">
											<i className="far fa-trash-alt"></i>
										</button>
									</li>
								);
							})
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Card;
