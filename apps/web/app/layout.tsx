import { FunctionComponent, PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default Layout;
