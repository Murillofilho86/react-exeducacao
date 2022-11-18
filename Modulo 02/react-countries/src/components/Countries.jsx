import Country from "./country";

export default function Countries({ children }) {
    return (
        <div className="border p-2">
            {children}
        </div>
    );
}