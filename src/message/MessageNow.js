
import MessageList from "./MessageList"

const MessageNow = ({chatme, length}) =>{
    
    const content = chatme.map((chat) =>{
            return <MessageList key={chat.id} chat={chat} length={length} />
        })
    
    return (
       <div className="bg-white">
        <div>
         <div className="flex justify-between text-black sm:py-1 px-3 -mb-7  sm:mb-0 mt-20 sm:mt-0 py-8">
                <p className="font-bold text-2xl">Chat</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

            </div>
            <div>
                <form>
                    <input className="rounded-3xl sm:w-80 w-72 p-1 bg-gray-200 translate-x-12 sm:translate-x-2 mx-auto my-2 border border-gray-200 " />
                </form>
                </div>
                <p className="bg-blue-50 -mb-20 sm:mb-0 w-16 p-1 text-center rounded-3xl translate-x-3 text-blue-600">Inbox</p>
        {content}
    </div>
    </div>
    )
}
export default MessageNow