import './Card.css';

const Card = (props) => {
    return (    
        <>
        <div className="card">
            <div class='img'>
                {props.birthday.image}
            </div>
            <div className="info">
                <h3 className="name" id={`name-${props.birthday.id}`}>{props.birthday.firstname} {props.birthday.lastname}</h3>
                <p className="age" id={`age-${props.birthday.id}`}>{props.birthday.age} Years</p>
            </div>
        </div>
        </>
    )
}

export default Card;