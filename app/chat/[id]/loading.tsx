import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<div className='bg-sigMain h-screen flex-[3_3_0%] flex flex-col px-4 text-white'>
			{/* Message Topbar Skeleton */}
			<div className='flex justify-between my-4'>
				<div className='flex gap-2 items-center'>
					<Skeleton className='h-8 w-8 rounded-full' />
					<Skeleton className='h-6 w-32' />
				</div>
				<div>
					<Skeleton className='w-8 h-8 rounded-full' />
				</div>
			</div>
			<div className='bg-sigSurface flex-1 overflow-y-auto rounded-xl my-4 border border-sigColorBgBorder  py-2 px-3 flex flex-col gap'>
				{/* Message container Skeleton */}
				<div className='flex flex-col gap-4'>
					{Array.from({ length: 6 }).map((_, i) => (
						<div className='flex items-center space-x-4' key={i}>
							<div className='space-y-2'>
								<Skeleton className='h-4 w-[250px]' />
								<Skeleton className='h-4 w-[200px]' />
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Message Input Skeleton */}
			<div className='flex justify-between my-3 gap-3 items-center'>
				<div className='flex gap-2 items-center flex-1'>
					<Skeleton className='h-8 w-8 rounded-full' />
					<Skeleton className='h-9 w-full' />
				</div>
				<div>
					<Skeleton className='w-8 h-8 rounded-full' />
				</div>
			</div>
		</div>
	);
};
export default Loading;
