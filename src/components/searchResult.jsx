const SearchResult = (place) => {
    const { name } = place.place;
    const firstComma = name.indexOf(',');

    return (
        <li>
            <h5>{name.substr(0, firstComma)}</h5>
            <p>{name.substr(firstComma + 2, name.length)}</p>
        </li>
    )
};

export default SearchResult;