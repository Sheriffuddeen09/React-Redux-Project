import SidePost from '../feature/posts/SidePost'
import MessagePage from './MessagePage'
function Combine({chatme, ChatSubmit, ChatDelete, length, chatTitle, setChatTitle, chatMessages}){

    return(
        <div className='flex gap-1'>
            <div className='hidden sm:block'>
                <SidePost />
        </div>
             <MessagePage chatme={chatme} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete} length={length}
          chatTitle={chatTitle} setChatTitle={setChatTitle} chatMessages={chatMessages} />
        </div>
    )
}
export default Combine