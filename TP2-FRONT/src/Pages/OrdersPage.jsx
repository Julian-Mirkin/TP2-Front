import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../Scripts/api";
import { useAuth } from "../Context/AuthContext";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

export default function OrdersPage() {
	const { user } = useAuth();
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		async function loadOrders() {
			setIsLoading(true);
			const { data, error } = await getOrders(user.id);

			if (error) {
				setErrorMessage(error.message);
				setOrders([]);
			} else {
				setOrders(data || []);
				setErrorMessage("");
			}

			setIsLoading(false);
		}

		loadOrders();
	}, [user]);

	async function handleDelete(orderId) {
		const { error } = await deleteOrder(orderId);

		if (error) {
			alert("Error al eliminar el pedido: " + error.message);
		} else {
			setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
		}
	}

	return (
		<>
			<NavBar />
			<div className="ordersPageContent">
				<h1>Mis Pedidos</h1>
				{isLoading && <p>Cargando pedidos...</p>}
				{!isLoading && errorMessage && <p>Error: {errorMessage}</p>}
				{!isLoading && orders.length === 0 && <p>No tienes pedidos.</p>}
				{!isLoading && orders.length > 0 && (
					<div className="ordersList">
						{orders.map((order) => (
							<div key={order.id} className="orderItem">
								<img src={order.producto.foto} alt={order.producto.nombre} />
								<div>
									<h2>{order.producto.nombre}</h2>
									<p>Precio: ${order.producto.precio}</p>
									<p>Estado: {order.state}</p>
									<Button
										text="Eliminar"
										onClick={() => handleDelete(order.id)}
										className="deleteButton"
									/>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
