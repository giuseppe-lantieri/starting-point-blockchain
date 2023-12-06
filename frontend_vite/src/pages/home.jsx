import { Box, Checkbox, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box padding='6' boxShadow='lg' bg='white'>
			<h1>La vostra App qui</h1>
			<Checkbox defaultChecked>Checkbox</Checkbox>
			<SkeletonCircle size='10' />
			<SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
		</Box>
	);
}