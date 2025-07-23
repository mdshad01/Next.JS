export const metadata = {
	title: "Files",
};

export default async function page({ params }) {
	const { filePath } = await params;
	return <h2>File /{filePath?.join("/")}</h2>;
}
