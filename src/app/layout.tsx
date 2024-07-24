import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import type { PropsWithChildren } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
