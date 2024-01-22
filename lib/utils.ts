import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// In summary, this function allows you to easily convert file contents to be displayed as an image.
export const readFileAsDataURL = (file: File | Blob): Promise<string> => {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			if (typeof reader.result === "string") resolve(reader.result);
		};
		reader.readAsDataURL(file);
	});
};

export const formatDate = (inputDate: Date): string => {
	const date = new Date(inputDate);
	const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
	const formattedDate: string = date.toLocaleDateString("en-US", options);
	return formattedDate;
};
