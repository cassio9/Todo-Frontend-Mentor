import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useEffect, useState } from "react";

const HeaderLayout = () => {
	const [DarkTheme, setDarkTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : false
	);

	//Dark Theme
	useEffect(() => {
		if (DarkTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "AnyWordMakesTrue");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.removeItem("theme");
		}
	}, [DarkTheme]);

	return (
		<header className="pt-20 pb-8 w-full z-10  mx-auto px-12">
			<div
				className="flex items-center justify-between max-w-lg md:px-10 mx-auto"
				style={{ zIndex: 10 }}>
				<h1 className="text-4xl font-bold text-white tracking-[.6rem]">TODO</h1>
				<img
					src={!DarkTheme ? MoonIcon : SunIcon}
					alt="Moon icon"
					className="cursor-pointer"
					onClick={() => setDarkTheme((prev) => !prev)}
				/>
			</div>
		</header>
	);
};

export default HeaderLayout;
