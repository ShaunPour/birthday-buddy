import { Birthdays } from "../Resources/Birthdays";
import Card from "./Card";

const CardList = () => {
    return(
        <div className="row">
            <h1 className="num">{Birthdays.length} birthdays today</h1>
            {Birthdays.map((birthday) => {
                return(
                    <div className="col" key={birthday.id}>
                        <Card birthday={birthday} />
                    </div>
                );
            })}
        </div>
    )
}

export default CardList;