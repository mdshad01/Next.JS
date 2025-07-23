import Link from "next/link";

import React from "react";

export const metadata = {
	title: "About",
};

export default function About() {
	return (
		<>
			<h1>About Page</h1>
			<Link href="/">Home</Link>
		</>
	);
}
