function PortfolioItem( { content, isActive } ) {
    return(
        <div className={`portfolio-Item ${isActive ? 'active' : ""}`}>
            {content}
        </div>
    )
}

export default PortfolioItem