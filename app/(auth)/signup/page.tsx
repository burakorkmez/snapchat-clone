import SignupCard from "./signup-card";

export default async function Signup() {
	return (
		<>
			<h1 className='text-2xl font-bold text-center mb-4'>Sign up to SnapNext</h1>
			<SignupCard />
		</>
	);
}

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 00:41:05
// import Image from "next/image";
// import Link from "next/link";

// export default async function Signup() {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-h-screen'>
// 			<div className='p-8 bg-white rounded-lg shadow-md min-w-80'>
// 				<Link href={"/"} className='flex justify-center mb-4'>
// 					<Image src={"/logo.svg"} width={40} height={40} alt='logo' />
// 				</Link>
// 				<h1 className='text-2xl font-bold text-center mb-4'>Sign up to SnapNext</h1>
// 			</div>
// 		</div>
// 	);
// }
