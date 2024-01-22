"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error({ error }: { error: Error & { digest?: string } }) {
	let errorMessage = error.message;

	if (error.message.startsWith("Cast to ObjectId failed")) {
		errorMessage = "User not found";
	}

	return (
		<main className='flex flex-[3_3_0%] h-screen flex-col items-center justify-center bg-[#dad83cf4]'>
			<Image src={"/hero.png"} width={500} height={500} alt='Hero img' />
			<h2 className='text-center'>{errorMessage}</h2>
			<Button
				asChild
				className='mt-4 rounded-md bg-sigSurface px-4 py-2 text-sm text-white transition-colors hover:bg-main'
			>
				<Link href='/chat'>Go Back to Chat</Link>
			</Button>
		</main>
	);
}
