import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
	const { blogID } = await params;
	return {
		title: `Blog ${blogID}`,
	};
}

export default async function page({ params }) {
	// console.log(await params);
	const { blogID } = await params;
	if (!/^\d+$/.test(blogID)) {
		notFound();
	}
	return (
		<div>
			Blog <b> {blogID}</b>
		</div>
	);
}
