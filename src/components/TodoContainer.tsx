import DeleteIcon from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";

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
		<div key={todo.id} className="w-full mx-auto p-4 border-b-2 flex justify-between items-center">
			<div className="flex gap-4 items-center">
				<img
					src={CheckIcon}
					alt=""
					className={`p-2 border-2 hover:border-DarkGrayishBlue   rounded-full ${
						todo.isCompleted
							? "bg-gradient-to-r from-LinerFrom to-LinearTo border-white"
							: "bg-white"
					}`}
					onClick={() => changeToComplete(todo.id)}
				/>
				<p
					className={`text-xl ${
						todo.isCompleted ? "text-LightGrayishBlue line-through" : "text-DarkGrayishBlue"
					}`}>
					{todo.task}
				</p>
			</div>
			<img
				src={DeleteIcon}
				onClick={() => deleteTodo(todo.id)}
				alt="Close btn"
				className={`cursor-pointer ${todo.isCompleted && "hidden"}`}
			/>
		</div>
	);
};

export default TodoContainer;
