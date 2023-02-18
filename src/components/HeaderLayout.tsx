import LightBgMobile from "../assets/bg-mobile-light.jpg";
import LightBgDesktop from "../assets/bg-desktop-light.jpg";
import DarkBgMobile from "../assets/bg-mobile-dark.jpg";
import DarkBgDesktop from "../assets/bg-desktop-dark.jpg";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";

const HeaderLayout = () => {
	return (
		<header className={`pt-20 pb-8 w-[80%] z-10`}>
			<div className="flex items-center justify-between" style={{ zIndex: 10 }}>
				<h1 className="text-4xl font-bold text-white tracking-[.6rem]">TODO</h1>
				<img src={MoonIcon} alt="" />
			</div>
		</header>
	);
};

export default HeaderLayout;

// <picture className="absolute inset-x-0 top-0 ">
// 				<source srcSet={LightBgDesktop} media="(min-width: 600px)" />
// 				<img src={LightBgMobile} alt="" className="w-full" style={{ zIndex: 0 }} />
// 			</picture>
