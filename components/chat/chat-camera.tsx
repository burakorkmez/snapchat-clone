"use client";
import { readFileAsDataURL } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import ImagePreviewDialog from "./image-preview-dialog";
import SelectUserDialog from "./select-user-dialog";

const ChatCamera = () => {
	const imgRef = useRef<HTMLInputElement>(null);
	const [selectedFile, setSelectedFile] = useState<string>("");
	const [step, setStep] = useState(0);

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const dataUrl = await readFileAsDataURL(file);
			setSelectedFile(dataUrl);
		}
	};

	const closeDialog = () => {
		setSelectedFile("");
		setStep(0);
	};

	return (
		<>
			<div className='aspect-[9/16] flex flex-col items-center justify-center h-[80%] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-sigColorBgBorder mx-auto lg:mx-0'>
				<div
					className='rounded-full p-8 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 cursor-pointer'
					onClick={() => imgRef.current!.click()}
				>
					<Image
						src={"/camera.svg"}
						height={0}
						width={0}
						style={{ width: "150px", height: "auto" }}
						className='hover:opacity-90'
						alt='Camera Icon'
					/>

					<input type='file' accept='image/*' hidden ref={imgRef} onChange={handleFileChange} />
				</div>
				<p className='w-2/3 text-center text-white mt-4 font-semibold'>Click the Camera to send your Code.</p>
			</div>
			{step === 0 ? (
				<ImagePreviewDialog
					selectedFile={selectedFile}
					onClose={closeDialog}
					onImageChange={() => imgRef.current!.click()}
					setStep={setStep}
				/>
			) : (
				<SelectUserDialog selectedFile={selectedFile} onClose={closeDialog} onPrev={() => setStep(0)} />
			)}
		</>
	);
};
export default ChatCamera;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:50:10
// "use client";
// import { readFileAsDataURL } from "@/lib/utils";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import ImagePreviewDialog from "./image-preview-dialog";
// import SelectUserDialog from "./select-user-dialog";

// const ChatCamera = () => {
// 	const imgRef = useRef<HTMLInputElement>(null);
// 	const [selectedFile, setSelectedFile] = useState<string>("");
// 	const [step, setStep] = useState(0);

// 	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
// 		const file = event.target.files?.[0];
// 		if (file) {
// 			const dataUrl = await readFileAsDataURL(file);
// 			setSelectedFile(dataUrl);
// 		}
// 	};

// 	const closeDialog = () => {
// 		setSelectedFile("");
// 		setStep(0);
// 	};

// 	return (
// 		<>
// 			<div className='aspect-[9/16] flex flex-col items-center justify-center h-[80%] bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-sigColorBgBorder mx-auto lg:mx-0'>
// 				<div
// 					className='rounded-full p-8 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 cursor-pointer'
// 					onClick={() => imgRef.current!.click()}
// 				>
// 					<Image
// 						src={"/camera.svg"}
// 						height={0}
// 						width={0}
// 						style={{ width: "150px", height: "auto" }}
// 						className='hover:opacity-90'
// 						alt='Camera Icon'
// 					/>

// 					<input type='file' accept='image/*' hidden ref={imgRef} onChange={handleFileChange} />
// 				</div>
// 				<p className='w-2/3 text-center text-white mt-4 font-semibold'>Click the Camera to send your Code.</p>
// 			</div>
// 			{step === 0 ? (
// 				<ImagePreviewDialog
// 					selectedFile={selectedFile}
// 					onClose={closeDialog}
// 					onImageChange={() => imgRef.current!.click()}
// 					setStep={setStep}
// 				/>
// 			) : (
// 				<SelectUserDialog selectedFile={selectedFile} onClose={closeDialog} onPrev={() => setStep(0)} />
// 			)}
// 		</>
// 	);
// };
// export default ChatCamera;
