interface Props {
    name: string;
    type: string;
    label: string;
}

export const FormInput = ({ label, name, type }: Props) => {
    return (
        <div className="input-box">
            <input
                required
                className="input"
                name={name}
                type={type} />
            <label
                className="input-label"
                htmlFor={name}>
                {label}
            </label>
        </div>
    )
}