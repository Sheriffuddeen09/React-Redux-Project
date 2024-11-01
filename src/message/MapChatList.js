import MessagePage from "./MessagePage"

const MapChatList =({chatme,ChatSubmit, ChatDelete,chatTitle, setChatTitle, chatMessages}) =>{

    return(
        <div>
        {
            chatMessages.map((chatMessage) =>(
                <MessagePage chatMessage={chatMessage} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete}
                chatTitle={chatTitle} setChatTitle={setChatTitle} chatme={chatme} />
            ))
        }
        </div>
    )

}
export default MapChatList