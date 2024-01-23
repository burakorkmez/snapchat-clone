import { SearchIcon } from "lucide-react";
import LogoutButton from "../shared/logout-button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Image from "next/image";
import { auth } from "@/auth";
import Chats from "./chats";
import { Suspense } from "react";
import { ChatsSkeleton } from "../skeletons/chats-skeletons";

const ChatSideBar = async () => {
	const session = await auth();
	return (
		<aside className='flex-[1_1_0%] flex flex-col bg-black text-white'>
			<div className='sticky top-0 bg-black z-50'>
				<div className='flex items-center justify-between p-4 border-b border-gray-800 '>
					<div className='relative'>
						<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
							<AvatarImage src={session?.user?.image!} />
						</Avatar>
					</div>
					<Button className='bg-sigButton hover:bg-sigButtonHover text-white rounded-full h-8 w-8 relative p-2'>
						<Image src={"/chat.svg"} fill alt='Chat icon' />
					</Button>
					<LogoutButton />
				</div>
				<div className='p-4 '>
					<div className=' text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder'>
						<SearchIcon className='text-gray-400 w-5' />
						<input
							className='bg-transparent border-none text-white placeholder-gray-400 focus:outline-none'
							placeholder='Search'
							type='text'
						/>
					</div>
				</div>
			</div>
			<Suspense fallback={<ChatsSkeleton />}>
				<Chats />
			</Suspense>
		</aside>
	);
};
export default ChatSideBar;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:49:12
// import { SearchIcon } from "lucide-react";
// import LogoutButton from "../shared/logout-button";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { auth } from "@/auth";

// const ChatSideBar = async () => {
// 	const session = await auth();
// 	return (
// 		<aside className='flex-[1_1_0%] flex flex-col bg-black text-white'>
// 			<div className='sticky top-0 bg-black z-50'>
// 				<div className='flex items-center justify-between p-4 border-b border-gray-800 '>
// 					<div className='relative'>
// 						<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
// 							<AvatarImage src={session?.user?.image!} />
// 						</Avatar>
// 					</div>
// 					<Button className='bg-sigButton hover:bg-sigButtonHover text-white rounded-full h-8 w-8 relative p-2'>
// 						<Image src={"/chat.svg"} fill alt='Chat icon' />
// 					</Button>
// 					<LogoutButton />
// 				</div>
// 				<div className='p-4 '>
// 					<div className=' text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder'>
// 						<SearchIcon className='text-gray-400 w-5' />
// 						<input
// 							className='bg-transparent border-none text-white placeholder-gray-400 focus:outline-none'
// 							placeholder='Search'
// 							type='text'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// };
// export default ChatSideBar;
