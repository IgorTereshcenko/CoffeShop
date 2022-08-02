import "./filters.scss";

const Filters = (props) => {
    const buttonsData = [
        {country: 'Brazil', label: 'Brazil'},
        {country: 'Kenya', label: 'Kenya'},
        {country: 'Columbia', label: 'Columbia'}
    ];
    
    const buttons = buttonsData.map(({country, label}) => {
        const active = props.filter === country;
        const clazz = active ? ' active' : ''; 
        return (
            <button type="button"
                    className={`filters__btns ${clazz}`}
                    key={country}
                    onClick={() => props.filterSelect(country)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="filters">
            <div className="container">
                <div className="filters__wrappButtons">
                    <div className="filters__buttonsText">Or filter</div>
                        {buttons}
                    </div>
            </div>  
        </div>
    )
}

export default Filters;