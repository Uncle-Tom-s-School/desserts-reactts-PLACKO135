type Dessertcardprop={
    name:string
}

const Dessertcard = (props: Dessertcardprop) => {
  return (
    <div>{props.name}</div>
  )
}

export default Dessertcard