export default function CheckboxInput({
    labelDescription = 'Descição do checkbox',
    valueInput,
    onChackboxChange = null,
    id,
    autoFocus = false }) {

    function handleInputChange({ currentTarget }) {
        if (onChackboxChange) {
            const newValue = currentTarget.value;
            onChackboxChange(newValue);
        }
    }
    return (
        <div className="flex flex-row items-center space-x-2 my-4">

            <input
                autoFocus={autoFocus}
                className="border p-1"
                type="checkbox"
                id={id}
                value={valueInput}
                onChange={handleInputChange} />
            <label className="text-sm mb-1" htmlFor={id}>{labelDescription}</label>
        </div>
    );
}   