import "./PersonPartner.css"


export default function PersonPartner({name,desc}){
    return (
      <div className="PersonPartner">
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
      </div>
    );
}