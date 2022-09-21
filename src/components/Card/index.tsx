import './styles.css';

export type CardType = {
  name: string;
  time: string;
}

export function Card(props: CardType){
  return(
    <div className="card" >
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}