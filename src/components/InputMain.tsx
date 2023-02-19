import { nanoid } from "nanoid";
import { useState } from "react";
import HeaderLayout from "./HeaderLayout";

interface Props {
	setMainTodo: React.Dispatch<
		React.SetStateAction<
			{
				task: string;
				isCompleted: boolean;
				id: string;
			}[]
		>
	>;
}
const InputMain = ({ setMainTodo }: Props) => {
	const [newTodo, setNewTodo] = useState("");

	const newTodoAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMainTodo((prevState) => {
			return [...prevState, { task: newTodo, isCompleted: false, id: nanoid() }];
		});
		setNewTodo("");
	};

	return (
		<div className="bg-bgLightMobile sm:bg-bgLightDesktop pb-20 bg-cover w-full mx-auto dark:bg-bgDarkMobile dark:sm:bg-bgDarkDesktop">
			<div className="">
				<HeaderLayout />
				<form
					className="w-full px-10 flex items-center justify-center max-w-xl mx-auto"
					onSubmit={(e) => newTodoAdd(e)}>
					<label htmlFor="newTodo" className="relative w-full ">
						<input
							type="text"
							name="newTodo"
							id="newTodo"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							className="w-full rounded-lg p-4 text-xl pl-14 placeholder:text-DarkGrayishBlue
							 placeholder:dark:text-LightGrayishBlue focus:outline-none bg-white dark:bg-VeryDarkUnsaturatedBlue dark:text-white"
							placeholder="Create a new todo..."
						/>
						<span className="p-3 border-[1px] absolute rounded-full left-4 top-1/2 -translate-y-1/2"></span>
					</label>
				</form>
			</div>
		</div>
	);
};

export default InputMain;
