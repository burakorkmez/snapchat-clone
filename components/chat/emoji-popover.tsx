import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { sendMessageAction } from "@/lib/actions";
import { readFileAsDataURL } from "@/lib/utils";

import { Loader2, SmilePlus } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

const emojis = [
	{ src: "/emojis/like.gif", alt: "Like" },
	{ src: "/emojis/dislike.gif", alt: "Dislike" },
	{ src: "/emojis/mind-blown.gif", alt: "Mind Blown" },
	{ src: "/emojis/laugh.gif", alt: "Laugh" },
	{ src: "/emojis/fire.gif", alt: "Fire" },
	{ src: "/emojis/question.gif", alt: "Question" },
	{ src: "/emojis/love.gif", alt: "Love" },
];

export function EmojiPopover() {
	const popoverRef = useRef<HTMLButtonElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams<{ id: string }>();

	const handleSendMessage = async (imgUrl: string) => {
		setIsLoading(true);
		try {
			const blob = await fetch(imgUrl).then((r) => r.blob());
			const dataUrl = await readFileAsDataURL(blob);
			await sendMessageAction(id, dataUrl, "image");
		} catch (error) {
			console.error("Error from sending emoji function", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild ref={popoverRef}>
				<Button
					ref={popoverRef}
					className='bg-transparent hover:bg-transparent max-w-min rounded-full h-11 w-11'
					disabled={isLoading}
				>
					{!isLoading ? <SmilePlus className='scale-150' /> : <Loader2 className='h-8 w-8 animate-spin' />}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80 bg-sigMain border border-sigColorBgBorder'>
				<div className='flex gap-4 flex-wrap items-center'>
					{emojis.map((emoji) => (
						<Emoji key={emoji.src} {...emoji} onClick={() => handleSendMessage(emoji.src)} />
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}

const Emoji = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => (
	<div className='cursor-pointer' onClick={onClick}>
		<Image src={src} width={70} height={70} alt={alt} />
	</div>
);

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 03:04:10
// import { Button } from "@/components/ui/button";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// import { SmilePlus } from "lucide-react";
// import Image from "next/image";
// import { useRef } from "react";

// const emojis = [
// 	{ src: "/emojis/like.gif", alt: "Like" },
// 	{ src: "/emojis/dislike.gif", alt: "Dislike" },
// 	{ src: "/emojis/mind-blown.gif", alt: "Mind Blown" },
// 	{ src: "/emojis/laugh.gif", alt: "Laugh" },
// 	{ src: "/emojis/fire.gif", alt: "Fire" },
// 	{ src: "/emojis/question.gif", alt: "Question" },
// 	{ src: "/emojis/love.gif", alt: "Love" },
// ];

// export function EmojiPopover() {
// 	const popoverRef = useRef<HTMLButtonElement>(null);

// 	return (
// 		<Popover>
// 			<PopoverTrigger asChild ref={popoverRef}>
// 				<Button
// 					ref={popoverRef}
// 					className='bg-transparent hover:bg-transparent max-w-min rounded-full h-11 w-11'
// 				>
// 					<SmilePlus className='scale-150' />
// 				</Button>
// 			</PopoverTrigger>
// 			<PopoverContent className='w-80 bg-sigMain border border-sigColorBgBorder'>
// 				<div className='flex gap-4 flex-wrap items-center'>
// 					{emojis.map((emoji) => (
// 						<Emoji key={emoji.src} {...emoji} />
// 					))}
// 				</div>
// 			</PopoverContent>
// 		</Popover>
// 	);
// }

// const Emoji = ({ src, alt }: { src: string; alt: string }) => (
// 	<div className='cursor-pointer'>
// 		<Image src={src} width={70} height={70} alt={alt} />
// 	</div>
// );
