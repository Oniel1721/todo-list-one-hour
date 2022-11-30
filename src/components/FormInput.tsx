interface Props {
    name: string;
    type: string;
    label: string;
    list?: string;
}

export const FormInput = ({ label, name, type, list = '' }: Props) => {
    return (
        <div className="input-box">
            <input
                list={list}
                required
                className="input"
                name={name}
                type={type}
            />
            <label
                className="input-label"
                htmlFor={name}>
                {label}
            </label>
        </div>
    )
}