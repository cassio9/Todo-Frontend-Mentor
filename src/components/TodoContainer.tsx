import DeleteIcon from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";
import { useEffect, useState } from "react";

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
		<article
			className="w-full mx-auto p-4 border-b-[1px] flex justify-between items-center text-VeryDarkBlue dark:border-DarkGrayishBlue"
			onMouseEnter={() => setShowDeleteIcon(true)}
			onMouseLeave={() => setShowDeleteIcon(false)}>
			<div
				className="grid grid-cols-[30px_1fr_30px] gap-4 items-start"
				onClick={() => changeToComplete(todo.id)}>
				{todo.isCompleted ? (
					<img
						src={CheckIcon}
						alt="Check Icon"
						className={`w-6 h-6 p-[.4rem] border-[1px] dark:border-0 hover:border-DarkGrayishBlue rounded-full bg-gradient-to-r from-LinerFrom to-LinearTo border-white`}
					/>
				) : (
					<div className="w-6 h-6 border-[1px] border-DarkGrayishBlue rounded-full  hover:border-l-LinerFrom hover:border-t-LinerFrom hover:border-b-LinearTo hover:border-r-LinearTo"></div>
				)}
				<p
					className={`text-xl cursor-pointer w-full truncate ${
						todo.isCompleted
							? "text-LightGrayishBlue dark:text-VeryDarkGrayishBlue line-through"
							: "text-VeryDarkBlue dark:text-VeryLightGrayishBlue"
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
		</article>
	);
};

export default TodoContainer;
