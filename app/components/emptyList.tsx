import { EyeSlashIcon } from "@heroicons/react/24/outline";

interface Props {
    title : string,
    description : string,
    className? : string,
}

export default function EmptyList({title , description ,className} : Props){
    return(
        <div className={`w-full mt-10 text-center border-2 border-grey-300 border-dashed rounded-lg p-12 py-24 ${className ? className : ''}`}>
            <EyeSlashIcon className="mx-auto h-12 w-12 text-grey-400" />
            <h3 className="mt-2 text-base font-medium text-grey-900">{title}</h3>
            <p className="mt-1 text-sm text-grey-500">{description}</p>
        </div>
    );
}