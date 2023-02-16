import { useState } from "react";
import "./App.css";
import InputMain from "./components/InputMain";
import DeleteIcon from "../src/assets/icon-cross.svg";
import CheckIcon from "../src/assets/icon-check.svg";

function App() {
	const [mainTodo, setMainTodo] = useState<{ task: string; isCompleted: boolean; id: string }[]>(
		[]
	);

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

	const countLeft = mainTodo.reduce(
		(accumulator, currentValue) =>
			currentValue.isCompleted == false ? accumulator + 1 : accumulator,
		0
	);

	console.log(countLeft);
	console.log(mainTodo);

	return (
		<main className="font-Josefin bg-VeryLightGrayishBlue min-h-screen max-h-fit relative flex flex-col">
			<InputMain setMainTodo={setMainTodo} />
			<div className="mt-5 rounded-lg bg-white w-[80%] mx-auto">
				{mainTodo &&
					mainTodo.map((todo) => {
						return (
							<div
								key={todo.id}
								className="w-full mx-auto p-4 border-b-2 flex justify-between items-center">
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
											todo.isCompleted
												? "text-LightGrayishBlue line-through"
												: "text-DarkGrayishBlue"
										}`}>
										{todo.task}
									</p>
								</div>
								<img
									src={DeleteIcon}
									onClick={(e) => deleteTodo(todo.id)}
									alt="Close btn"
									className={`cursor-pointer ${todo.isCompleted && "hidden"}`}
								/>
							</div>
						);
					})}
				<div className="flex justify-between p-4">
					<p>{countLeft} items left</p>
					<p>Clear Completed</p>
				</div>
			</div>
			<div className="flex gap-6 mt-5 rounded-lg bg-white w-[80%] mx-auto justify-center p-4">
				<p>All</p>
				<p>Active</p>
				<p>Completed</p>
			</div>
			<p className="text-center my-6">Drag and drop to reorder list</p>
		</main>
	);
}

export default App;
