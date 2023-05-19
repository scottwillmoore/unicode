import { Metadata } from "next";
import { FunctionComponent, PropsWithChildren } from "react";

import "./layout.css";

export const metadata: Metadata = {
	title: "Unicode",
};

export type LayoutProps = PropsWithChildren;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default Layout;
