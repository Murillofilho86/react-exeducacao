export default function TextInput({
    labelDescription = 'Descição do label:',
    valueInput,
    onInputChange = null,
    id }) {

    function handleInputChange({ currentTarget }) {
        if (onInputChange) {
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }
    return (
        <div className="flex flex-col  my-4">
            <label className="text-sm mb-1" htmlFor="inputName">{labelDescription}</label>
            <input
                autoFocus
                className="border p-1"
                type="date"
                value={valueInput}
                onChange={handleInputChange} />
        </div>
    );
}