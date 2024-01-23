import ChatSideBar from "@/components/chat/chat-sidebar";

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main className='flex h-screen'>
			<ChatSideBar />
			{children}
		</main>
	);
};
export default Layout;

// COPY AND PASTE THIS FILE AT 01:48:40, we will never change this file.
