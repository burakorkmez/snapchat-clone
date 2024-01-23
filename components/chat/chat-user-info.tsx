import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IUserDocument } from "@/models/userModel";

const ChatUserInfo = ({ userData }: { userData: IUserDocument }) => {
	const userFullName = userData.fullName;
	const userAvatar = userData.avatar;

	return (
		<div className='cursor-pointer bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover rounded-full flex gap-2 items-center py-1 px-3 text-white font-semibold'>
			<Avatar className='h-8 w-8 rounded-full flex items-center justify-center'>
				<AvatarImage src={userAvatar || "/logo.svg"} />
			</Avatar>

			<span>{userFullName}</span>
		</div>
	);
};
export default ChatUserInfo;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 02:59:30
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// const ChatUserInfo = () => {
// 	const userFullName = "John Doe";
// 	const userAvatar = "";

// 	return (
// 		<div className='cursor-pointer bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover rounded-full flex gap-2 items-center py-1 px-3 text-white font-semibold'>
// 			<Avatar className='h-8 w-8 rounded-full flex items-center justify-center'>
// 				<AvatarImage src={userAvatar || "/logo.svg"} />
// 			</Avatar>

// 			<span>{userFullName}</span>
// 		</div>
// 	);
// };
// export default ChatUserInfo;
