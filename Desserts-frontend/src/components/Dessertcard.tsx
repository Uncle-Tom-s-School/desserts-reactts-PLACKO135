import AddtocardBtn from "./AddtocardBtn"

export type Dessertcardprop={
    name:string,
    category:string,
    price:number,
    image:{
      thumbnail:string,
      mobile:string,
      tablet:string,
      desktop:string
    }
}

const Dessertcard = (props: Dessertcardprop) => {
  return (
    <div className="dessert-card">
      <img src="{props.image.desktop}"/>
      <AddtocardBtn/>
      <h4>{props.category}</h4>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
    </div>
  )
}

export default Dessertcard