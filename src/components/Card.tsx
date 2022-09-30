interface iProps {
    title: string;
//    image: Object;
}

export default function Card({title}: iProps) {
  return <article>
    <h3>{title}</h3>
  </article>;
}
