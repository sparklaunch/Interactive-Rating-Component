import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={overpass.className}>
			<body>{children}</body>
		</html>
	);
}
