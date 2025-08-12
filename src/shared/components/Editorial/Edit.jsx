import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location, department }) {
    return (
        <>
            <div className="overflow-x-auto">
                <div className="table-auto min-w-full border border-[#FEDE68] rounded-md ">
                    <div>
                        <div className="p-3">
                            <div className="italic text-sm"><span className='font-medium not-italic text-base'>Dr. {name},</span> {position}, {location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
