"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function ({ params }) {
	const a = usePathname();
	console.log(a);
	return (
		<div>
			<h1>Blog {a.split("/")[2]} page not found!</h1>
			<p>Could not found the page you are looking for.</p>
		</div>
	);
}
