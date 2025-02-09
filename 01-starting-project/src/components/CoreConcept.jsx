// function CoreConcept(props) { Note: Alternative to using the spread operator .ie. props
//The destructuring here helps you to avoid repeating the props object multiple times.
//The destructuring here works by taking the properties of the props object and assigning them to variables with the same name.
export default function CoreConcept({image, description, title}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <p>{props.description}</p> Note: Alternative to using destructuring .ie. props */}
    </li>
  );
}