import React from "react";

export const metadata = {
	title: "Blogs",
};

export default async function page(props) {
	console.log(await props);
	return (
		<div>
			<h1>Blog 1</h1>
			<h1>Blog 2</h1>
			<h1>Blog 3</h1>
		</div>
	);
}
