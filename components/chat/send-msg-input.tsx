"use client";
import Image from "next/image";
import { EmojiPopover } from "./emoji-popover";
import { TextMessageSent } from "../svgs/chatSvg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { sendMessageAction } from "@/lib/actions";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const SendMsgInput = () => {
	const [messageContent, setMessageContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams<{ id: string }>();
	const receiverId = params.id;

	const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await sendMessageAction(receiverId, messageContent, "text");
			setMessageContent("");
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='flex gap-2 items-center py-1'>
			<div className='cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-sigBackgroundSecondaryHover'>
				<Image
					src={"/camera.svg"}
					height={0}
					width={0}
					style={{ width: "20px", height: "auto" }}
					alt='camera icon'
				/>
			</div>
			<form
				onSubmit={handleSendMessage}
				className='flex-1 flex  items-center gap-1 bg-sigBackgroundSecondaryHover rounded-full border   border-sigColorBgBorder'
			>
				<Input
					placeholder='Send a chat'
					className='bg-transparent focus:outline-transparent border-none outline-none w-full h-full rounded-full'
					type='text'
					value={messageContent}
					onChange={(e) => setMessageContent(e.target.value)}
					disabled={isLoading}
				/>
				<Button size={"sm"} className='bg-transparent hover:bg-transparent text-sigSnapChat' type='submit'>
					{!isLoading && <TextMessageSent className=' scale-150 mr-1' />}
					{isLoading && <Loader2 className='h-6 w-6 animate-spin' />}
				</Button>
			</form>
			<div className='cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-sigBackgroundSecondaryHover'>
				<EmojiPopover />
			</div>
		</div>
	);
};
export default SendMsgInput;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 03:03:00
// "use client";
// import Image from "next/image";
// import { EmojiPopover } from "./emoji-popover";
// import { TextMessageSent } from "../svgs/chatSvg";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";

// const SendMsgInput = () => {
// 	return (
// 		<div className='flex gap-2 items-center py-1'>
// 			<div className='cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-sigBackgroundSecondaryHover'>
// 				<Image
// 					src={"/camera.svg"}
// 					height={0}
// 					width={0}
// 					style={{ width: "20px", height: "auto" }}
// 					alt='camera icon'
// 				/>
// 			</div>
// 			<form className='flex-1 flex  items-center gap-1 bg-sigBackgroundSecondaryHover rounded-full border   border-sigColorBgBorder'>
// 				<Input
// 					placeholder='Send a chat'
// 					className='bg-transparent focus:outline-transparent border-none outline-none w-full h-full rounded-full'
// 					type='text'
// 				/>
// 				<Button size={"sm"} className='bg-transparent hover:bg-transparent text-sigSnapChat' type='submit'>
// 					<TextMessageSent className=' scale-150 mr-1' />
// 				</Button>
// 			</form>
// 			<div className='cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white bg-sigBackgroundSecondaryHover'>
// 				<EmojiPopover />
// 			</div>
// 		</div>
// 	);
// };
// export default SendMsgInput;
