interface iProps {
    path: string;
    label: string;
}

export default function Button({path, label}: iProps) {
    return <button className="Button">
        <svg className = "Icon">
            <path className = "Vector" d = {path}/>
        </svg>
        <p className="Label">{label}</p>
    </button>
    
}