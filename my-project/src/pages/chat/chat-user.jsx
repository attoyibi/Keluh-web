import HeaderLayout from "../../components/Header/HeaderLayout"
import SidebarLayout from "../../components/Header/SidebarLayout"
import Chat from "../../components/chat/chat"

const ChatUser = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <HeaderLayout />
        <SidebarLayout />
      </div>

      <div className="lg:ml-72 min-h-[80dvh] overflow-y-auto">
        <div className="bg-light-2 px-8">
          <section className="flex flex-col items-start mb-4 pt-8 text-left">
            <h1 className="text-3xl font-bold">Kelola Chat</h1>
          </section>
          <div className="container mt-9 w-full justify-between rounded-lg min-h-[80vh]">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUser