"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { authAction } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function SignupCard() {
	// inline server action: in client components cannot be used as inline. You have to put it in a file and import it.
	// async function authAction() {
	// 	"use server";
	// 	await signIn("github");
	// }
	const [errorMessage, dispatch] = useFormState(authAction, "");

	return (
		<>
			<form action={dispatch} className='space-y-4'>
				<SignUpButton />
			</form>
			<div className='mt-4 text-center text-[13px]'>
				<span>Already have an account? </span>
				<Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/login'>
					Log in
				</Link>
				{errorMessage ? <p className='text-sm text-red-500'>{errorMessage}</p> : null}
			</div>
		</>
	);
}

function SignUpButton() {
	const { pending } = useFormStatus();
	return (
		<Button className='w-full flex gap-2' disabled={pending} aria-disabled={pending}>
			<Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Sign up with Github
		</Button>
	);
}

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 00:41:30
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function SignupCard() {
// 	return (
// 		<>
// 			<form className='space-y-4'>
// 				<SignUpButton />
// 			</form>
// 			<div className='mt-4 text-center text-[13px]'>
// 				<span>Already have an account? </span>
// 				<Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/login'>
// 					Log in
// 				</Link>
// 			</div>
// 		</>
// 	);
// }

// function SignUpButton() {
// 	return (
// 		<Button className='w-full flex gap-2'>
// 			<Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Sign up with Github
// 		</Button>
// 	);
// }
