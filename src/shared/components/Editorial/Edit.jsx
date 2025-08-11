import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location, department }) {
    return (
        <>
            <div className="overflow-x-auto">
                <div className="table-auto min-w-full border rounded-md border-gray-200">
                    <div>
                        <div className=" p-3 ">
                            <div className=" "><span className='font-medium'>Dr. {name},</span> {position}, {location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
