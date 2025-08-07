import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location, department }) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full border border-gray-200 shadow-sm rounded-lg">
                    <div>
                        <div className="border-b p-3 ">
                            <div className="font-medium ">Dr. {name}</div>
                            <div className=" "> {department}, </div>
                            <div className=" "> {position}, {location} </div>
                            {/* <div className=" "> {location} </div> */}
                        </div>
                    </div>
                </table>
            </div>
        </>
    )
}

export default Edit
