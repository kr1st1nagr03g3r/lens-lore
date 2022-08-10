import singleimage from './singleimage';


export default function gallery({ allImages }) {
    return (
        <>
            <singleimage
                {allImages.map((image) => (
                    <Card card={image} singleImage="image" key={image.filename} />
                ))} />
        </>
    );
}