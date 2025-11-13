import React from "react"
import Link from "next/link"


const DashboardHeader: React.FC = () => {
    return ( 
        <div className="flex flex-row justify-evenly">
            <div className="">
                <Link href="/dashboard/feedback">Feedback</Link>
            </div>
            <div>
                <Link href="/dashboard/assignments">Assignments</Link>
            </div>
            <div>
                <Link href="/dashboard/readinglist">Reading List</Link>
            </div>
        </div>
    )
}

export default DashboardHeader



