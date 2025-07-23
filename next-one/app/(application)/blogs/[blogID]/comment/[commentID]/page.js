import React from "react";

export default async function page({ params }) {
	const paramsObj = await params;
	console.log(paramsObj);
	const { blogID, commentID } = paramsObj;
	return (
		<div>
			Comment no {commentID} on <b>{blogID}</b> page
		</div>
	);
}
