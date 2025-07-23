export const metadata = {
	title: {
		template: "Technical Agency - %s",
		default: "Technical Agency",
	},
	description: "Shad",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* <header style={{ background: "lightBlue" }}>Header</header> */}
				{children}
				{/* <footer style={{ background: "pink" }}>Footer</footer> */}
			</body>
		</html>
	);
}
