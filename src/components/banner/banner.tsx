import "./banner.scss"

interface BannerProps {
    bannerTitle: string;
    bannerSubtitle: string;
    buttonText: string;
    bannerImage:  string;
}

function Banner({bannerTitle,bannerSubtitle,buttonText,bannerImage}: BannerProps){
    return(
        <div className="banner" style={
            {backgroundImage: `url(${bannerImage})`}
            }>
            <div className="banner-content">
                <h1>{bannerTitle}</h1>
                <h2>{bannerSubtitle}</h2>
                <a>{buttonText}</a>
            </div>
        </div>
    )
}

export default Banner