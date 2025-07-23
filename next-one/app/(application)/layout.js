export default function RootLayout({ children }) {
	return (
		<>
			<header style={{ background: "yellow" }}>Header (Application)</header>
			{children}
			<footer style={{ background: "lightgreen" }}>Footer (Application)</footer>
		</>
	);
}
