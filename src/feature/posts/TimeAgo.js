import { formatDistanceToNow, parseISO } from "date-fns"

function TimeAgo ({timestamp}){

    let TimeAgo
    if(timestamp){

    const date = parseISO(timestamp)
    const timedistance = formatDistanceToNow(date)
    TimeAgo = `${timedistance} ago`

}
    return (
        <div title="timestamp">
            {TimeAgo}
        </div>
    )
}

export default TimeAgo