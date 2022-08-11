import SectionSeparator from "./section-separator";
import Singleimage from "./Singleimage";

export default function gallery({ myPhotos }) {
  console.log("gallery");
  const count = myPhotos.length;
  return (
      <>
          <p>there are {count} photos in this gallery</p>
          <SectionSeparator/>
      {myPhotos.map((image) => (
          <Singleimage photo={image} key={image.filename} />
                ))} 
    </>
  );
}
