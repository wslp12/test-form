function Button(props: ButtonProps) {
    const {children} = props;

    console.count()
    return <button type="button" className="border border-white p-2 rounded-md w-full text-2xl last:mt-auto shadow-sm shadow-white active:shadow-none hover:scale-[1.01] duration-200 bg-white text-purple-600">{children}</button>
}

export default Button;