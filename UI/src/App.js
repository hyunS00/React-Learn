import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
// import { Profile } from "./Profile";

// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   );
// }

// export default function Avatar() {
//   const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   const description = "Gregorio Y. Zara";
//   return <img className="avatar" src={avatar} alt={description} />;
// }

// const today = new Date();

// function formatData(date) {
//   return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
// }

// export default function TodoList() {
//   return (
//     <ul
//       style={{
//         background: "black",
//         color: "pink",
//       }}
//     >
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }

// const person = {
//   name: "Gregorio Y. Zara",
//   url: "https://i.imgur.com/7vQD0fPs.jpg",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img className="avatar" src={person.url} alt="Gregorio Y. Zara" />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// function Card({ children }) {
//   return <div className="card">{children}</div>;
// }

// export default function Profile() {
//   return (
//     <Card>
//       {`
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />`}
//     </Card>
//   );
// }

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = <del>{name + "✔"}</del>;
//   }
//   return <li className="item">{itemContent}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
