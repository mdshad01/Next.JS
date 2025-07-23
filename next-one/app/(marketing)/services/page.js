import Link from "next/link";

export default function Services() {
	return (
		<>
			<h1>All Services </h1>
			<Link href="/">Home</Link>
			<br />
			<Link href="/services/web-dev">web development</Link>
		</>
	);
}
