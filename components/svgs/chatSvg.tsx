type SvgProps = React.SVGProps<SVGSVGElement>;

export const TextMessageSvgReceived = (props: SvgProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='current-color' {...props}>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3 4.353C3 3.053 4.053 2 5.353 2h5.294C11.947 2 13 3.053 13 4.353v9.854a.5.5 0 0 1-.809.393l-2.989-2.35a1.176 1.176 0 0 0-.727-.25H5.353A2.353 2.353 0 0 1 3 9.647V4.353Z'
		/>
	</svg>
);

export const ImageMessageSvg = (props: SvgProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
		<rect width={10.5} height={10.5} x={2.75} y={2.75} stroke='currentColor' strokeWidth={1.5} rx={1.808} />
	</svg>
);

export const TextMessageSent = (props: SvgProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m13.607 7.474.02.01.018.009c.584.257.605.502.605.511 0 .01-.021.255-.605.512l-.019.008-.018.01-8.77 4.457c-.424.184-.736.253-.938.26a.715.715 0 0 1-.136-.007.64.64 0 0 1 .009-.076c.028-.17.13-.442.371-.814.4-.515.826-1.228 1.156-1.975.33-.746.6-1.606.6-2.375 0-.783-.277-1.643-.611-2.388a10.786 10.786 0 0 0-1.157-1.982c-.245-.366-.346-.634-.374-.799a.588.588 0 0 1-.008-.076.69.69 0 0 1 .15-.009c.203.006.516.073.938.257l8.77 4.467ZM3.712 13.23l.002.002a.01.01 0 0 1-.002-.002Zm.054.062.001.007-.001-.007ZM3.754 2.711l-.002.007c0-.005.001-.007.002-.007Zm-.048.061a.01.01 0 0 1-.002.002l.002-.002Z'
		/>
	</svg>
);

const StartChatSvg = (props: SvgProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
		<path
			fill='#fff'
			fillRule='evenodd'
			d='m14.947 8.004 5.613-4.53a2.12 2.12 0 0 1 2.974.3 2.1 2.1 0 0 1-.325 2.961l-5.613 4.53c-.241.195-.606.31-.915.286l-1.986-.2a.486.486 0 0 1-.436-.537l.217-1.978c.041-.305.23-.637.471-.832Zm-.334-3.244a2.9 2.9 0 0 1 1.336.324l-2.015 1.627a3.301 3.301 0 0 0-1.173 2.077l-.223 2.023a2.384 2.384 0 0 0 2.139 2.633l1.986.2c.29.022.58.006.861-.046v6.598c0 .46-.377.837-.835.804a1.488 1.488 0 0 1-.152-.017c-.163-.032-.373-.188-.431-.233a247.372 247.372 0 0 1-2.797-2.197 1.472 1.472 0 0 0-.655-.352h-5.42a2.911 2.911 0 0 1-2.91-2.912V7.672A2.912 2.912 0 0 1 7.236 4.76h7.377Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default StartChatSvg;
