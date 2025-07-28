interface inputInterface {
    id: string,
    name: string,
    type: string,
    label: string,
    labelClassName?: string,
    inputClassName?: string,
}


const Input = (children: inputInterface) => {
    return (
        <>
            <label style={{fontFamily: 'vazir'}} className={`block text-sm font-medium leading-6 text-gray-200 ${children.labelClassName}`}>
                {children.label}
            </label>
            <div className="mt-2">
                <input
                    id={children.id}
                    name={children.name}
                    type={children.type}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${children.inputClassName}`}
                />
            </div>
        </>
    )
}


export default Input;