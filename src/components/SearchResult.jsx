const SearchResult = (props) => {
    const { name } = props.place;
    const firstComma = name.indexOf(',');

    const onSelect = () => {
        props.setLocation(props.place);
    }

    return (
        <li className=" text-white p-5 hover:bg-slate-500" onClick={onSelect}>
            <p className=" font-semibold">{name.substr(0, firstComma)}</p>
            <p className=" font-light">{name.substr(firstComma + 2, name.length)}</p>
        </li>
    )
};

export default SearchResult;