import "./cardComBackground.scss"

interface CardComBackgroundProps {
    cardTitle: string;
    cardSubtitle: string;
    buttonText: string;
    cardImage:  string;
}

function CardCombackground({cardTitle,cardSubtitle,buttonText,cardImage}: CardComBackgroundProps){
    return(
        <div className="card-com-background" style={
            {backgroundImage: `url(${cardImage})`}
            }>
            <div className="card-content">
                <h2>{cardTitle}</h2>
                <h3>{cardSubtitle}</h3>
                <a>{buttonText}</a>
            </div>
        </div>
    )
}

export default CardCombackground