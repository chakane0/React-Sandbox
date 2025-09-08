
type Guitar = {
    name: string,
    origin: string,
    price: number,
}
type GuitarProps = {
    guitars: Guitar;
}

export default function GuitarListHelper({guitars}: GuitarProps) {
    return (
        <>
        {guitars.name} | {guitars.origin} | {guitars.price}
        </>
    )
}