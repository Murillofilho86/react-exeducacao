import Item from "./item";

export default function Country({
    children: country = null,
    onCountryClick = null,
    isVisited = false,
}) {

    if (!country) return <div>Não foi possível localizar país!</div>;

    function handleCountryClick() {
        if (onCountryClick) {
            console.log(country.ordem);
            onCountryClick(country.ordem);
        }
    }

    const { nome, sigla2, sigla3, codigo } = country;
    const isVistedClassName = isVisited ? 'bg-green-100' : '';

    return (
        <div className={`border p-2 m-2 flex flex-row items-center space-x-2 ${isVistedClassName} `} onClick={handleCountryClick}>
            <ul>
                <li><Item label="Nome:"> {nome} </Item></li>
                <li><Item label="Sigla 1:">  {sigla2} </Item></li>
                <li><Item label="Sigla 2:">  {sigla3} </Item></li>
                <li><Item label="Código:">  {codigo} </Item></li>
            </ul>
        </div>
    );
}
