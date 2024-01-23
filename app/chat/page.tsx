import ChatCamera from "@/components/chat/chat-camera";
import Image from "next/image";

export default async function ChatRootPage() {
	return (
		<main className='flex-grow bg-sigMain items-center flex px-2'>
			<div
				className='bg-chat bg-right-bottom
				rounded-3xl w-full h-[96%] flex items-center justify-center px-6'
			>
				<ChatCamera />
				<div className='hidden lg:block'>
					<Image src={"/snapemoji.png"} width={500} height={600} alt='Snap avatar' />
				</div>
			</div>
		</main>
	);
}

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:40:30
// import ChatCamera from "@/components/chat/chat-camera";
// import Image from "next/image";

// export default function ChatRootPage() {
// 	return (
// 		<main className='flex-grow bg-sigMain items-center flex px-2'>
// 			<div
// 				className='bg-chat bg-right-bottom
// 				rounded-3xl w-full h-[96%] flex items-center justify-center px-6'
// 			>
// 				<ChatCamera />
// 				<div className='hidden lg:block'>
// 					<Image src={"/snapemoji.png"} width={500} height={600} alt='Snap avatar' />
// 				</div>
// 			</div>
// 		</main>
// 	);
// }
