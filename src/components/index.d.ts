type ButtonProps = {
    children: React.ReactNode
}

type InputProps = {
    /**
     * default: text
     */
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"]
    value: string;
    onChange: (e: any) => void;
}