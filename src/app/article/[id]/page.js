export default async function Article({ params }) {
    const { id } = await params;

    console.log(id);

    return (
        <>
        </>
    );
}