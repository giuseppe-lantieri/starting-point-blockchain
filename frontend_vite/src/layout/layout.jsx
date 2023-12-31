import { HStack } from "@chakra-ui/react";
import { Outlet, Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Layout() {
	return (
		<>
			<HStack spacing='24px'>
				<ChakraLink as={ReactRouterLink} to='/'>
					Home
				</ChakraLink>
				<ChakraLink as={ReactRouterLink} to='/about'>
					About
				</ChakraLink>
				<ConnectButton />
			</HStack>
			<Outlet />
		</>
	);
}
