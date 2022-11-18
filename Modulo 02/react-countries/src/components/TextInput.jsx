export default function TextInput({
    labelDescription = 'Descição do label:',
    valueInput,
    onInputChange = null,
    id,
    autoFocus = false }) {

    function handleInputChange({ currentTarget }) {
        if (onInputChange) {
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }
    return (
        <div className="flex flex-col  my-4">
            <label className="text-sm mb-1" htmlFor={id}>{labelDescription}</label>
            <input
                autoFocus={autoFocus}
                className="border p-1"
                type="text"
                id={id}
                value={valueInput}
                onChange={handleInputChange} />
        </div>
    );
}