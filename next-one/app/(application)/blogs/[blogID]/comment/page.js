import React from "react";

export default async function page({ params }) {
	const paramsObj = await params;
	console.log(paramsObj);
	const { blogID } = paramsObj;
	return (
		<div>
			All comments on <b>{blogID}</b> blog page
		</div>
	);
}
