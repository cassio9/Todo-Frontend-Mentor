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
		console.log(newTodo);
		setMainTodo((prevState) => {
			return [...prevState, { task: newTodo, isCompleted: false, id: nanoid() }];
		});
		setNewTodo("");
	};

	return (
		<div className="flex flex-col justify-start items-center bg-bgLightMobile pb-20 bg-cover">
			<HeaderLayout />
			<form className="w-full flex justify-center relative" onSubmit={(e) => newTodoAdd(e)}>
				<input
					type="text"
					name="newTodo"
					id="newTodo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className="w-[80%] rounded-lg p-4 text-xl pl-14 placeholder:text-DarkGrayishBlue"
					placeholder="Create a new todo..."
				/>
				<span className="p-3 border-[1px]  rounded-full absolute top-1/2 -translate-y-1/2 left-16"></span>
			</form>
		</div>
	);
};

export default InputMain;
