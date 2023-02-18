import DeleteIcon from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";
import { useState } from "react";

interface Props {
	todo: { task: string; isCompleted: boolean; id: string };
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

const TodoContainer = ({ todo, setMainTodo }: Props) => {
	const [showDeleteIcon, setShowDeleteIcon] = useState(false);

	const deleteTodo = (id: string) => {
		setMainTodo((prevState) => {
			return prevState.filter((todo) => todo.id !== id);
		});
	};

	const changeToComplete = (id: string) => {
		setMainTodo((prevState) => {
			return prevState.map((todo) =>
				todo.id !== id ? todo : { ...todo, isCompleted: !todo.isCompleted }
			);
		});
	};

	return (
		<div
			key={todo.id}
			className="w-full mx-auto p-4 border-b-2 flex justify-between items-center text-VeryDarkBlue"
			onMouseEnter={() => setShowDeleteIcon(true)}
			onMouseLeave={() => setShowDeleteIcon(false)}>
			<div className="flex gap-4 items-center" onClick={() => changeToComplete(todo.id)}>
				<img
					src={CheckIcon}
					alt=""
					className={`p-[.4rem] border-[1px] hover:border-DarkGrayishBlue   rounded-full ${
						todo.isCompleted
							? "bg-gradient-to-r from-LinerFrom to-LinearTo border-white"
							: "bg-white"
					}`}
				/>
				<p
					className={`text-xl cursor-pointer ${
						todo.isCompleted ? "text-LightGrayishBlue line-through" : "text-VeryDarkBlue"
					}`}>
					{todo.task}
				</p>
			</div>
			<img
				src={DeleteIcon}
				onClick={() => deleteTodo(todo.id)}
				alt="Close btn"
				className={`cursor-pointer ${showDeleteIcon ? "static" : "hidden"} `}
			/>
		</div>
	);
};

export default TodoContainer;
