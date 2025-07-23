export default function RootLayout({ children }) {
	return (
		<>
			<header style={{ background: "olive" }}>Header (Marketing)</header>
			{children}
			<footer style={{ background: "deeppink" }}>Footer (Marketing)</footer>
		</>
	);
}
