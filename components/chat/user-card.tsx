import { IUserDocument } from "@/models/userModel";
import { Avatar, AvatarImage } from "../ui/avatar";

type UserCardProps = {
	user: IUserDocument;
	handleSelectUser: (user: IUserDocument) => void;
	selectedUser: IUserDocument | null;
};
const UserCard = ({ user, handleSelectUser, selectedUser }: UserCardProps) => {
	const isSelected = selectedUser?._id === user._id;
	return (
		<div
			onClick={() => handleSelectUser(user)}
			className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer 
				${isSelected ? "bg-sigBackgroundFeedHover" : ""}
			`}
		>
			<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
				<AvatarImage src={user.avatar} />
			</Avatar>
			<span>{user.fullName}</span>
		</div>
	);
};
export default UserCard;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:56:00
// import { Avatar, AvatarImage } from "../ui/avatar";

// const UserCard = () => {
// 	return (
// 		<div
// 			className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer `}
// 		>
// 			<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
// 				<AvatarImage src={"https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"} />
// 			</Avatar>
// 			<span>John Doe</span>
// 		</div>
// 	);
// };
// export default UserCard;
