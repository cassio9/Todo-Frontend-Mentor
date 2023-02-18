import { useState } from "react";
import "./App.css";
import InputMain from "./components/InputMain";
import TodoContainer from "./components/TodoContainer";

function App() {
	const [mainTodo, setMainTodo] = useState<{ task: string; isCompleted: boolean; id: string }[]>(
		[]
	);
	const [isFiltered, setIsFiltered] = useState({
		isFilteredCompleted: false,
		isFilteredActive: false,
	});

	const clearCompleted = () => {
		setMainTodo((prevState) => {
			return prevState.filter((todo) => todo.isCompleted == false);
		});
	};

	const countLeft = mainTodo.reduce(
		(accumulator, currentValue) =>
			currentValue.isCompleted == false ? accumulator + 1 : accumulator,
		0
	);

	const filterActive = mainTodo.filter((todo) => todo.isCompleted === false);
	const filterCompleted = mainTodo.filter((todo) => todo.isCompleted !== false);

	return (
		<main className="font-Josefin bg-VeryLightGrayishBlue min-h-screen max-h-fit relative flex flex-col">
			<InputMain setMainTodo={setMainTodo} />
			<div className="-translate-y-16">
				<div className="mt-5 rounded-lg bg-white w-[80%] mx-auto ">
					{mainTodo && isFiltered.isFilteredActive
						? filterActive.map((todo) => <TodoContainer todo={todo} setMainTodo={setMainTodo} />)
						: isFiltered.isFilteredCompleted
						? filterCompleted.map((todo) => <TodoContainer todo={todo} setMainTodo={setMainTodo} />)
						: mainTodo.map((todo) => {
								return <TodoContainer todo={todo} setMainTodo={setMainTodo} />;
						  })}
					<div className="flex justify-between p-4">
						<p className="text-DarkGrayishBlue ">{countLeft} items left</p>
						<p
							className="cursor-pointer text-DarkGrayishBlue hover:text-VeryDarkBlue"
							onClick={clearCompleted}>
							Clear Completed
						</p>
					</div>
				</div>
				<div className="flex gap-6 mt-5 rounded-lg bg-white w-[80%] mx-auto justify-center p-4 ">
					<p
						className={`cursor-pointer text-DarkGrayishBlue hover:text-VeryDarkBlue ${
							!isFiltered.isFilteredActive &&
							!isFiltered.isFilteredCompleted &&
							"text-BrightBlue font-bold"
						}`}
						onClick={() =>
							setIsFiltered((prev) => ({
								...prev,
								isFilteredActive: false,
								isFilteredCompleted: false,
							}))
						}>
						All
					</p>
					<p
						className={`cursor-pointer text-DarkGrayishBlue hover:text-VeryDarkBlue ${
							isFiltered.isFilteredActive &&
							!isFiltered.isFilteredCompleted &&
							"text-BrightBlue font-bold"
						}`}
						onClick={() =>
							setIsFiltered((prev) => ({
								...prev,
								isFilteredActive: true,
								isFilteredCompleted: false,
							}))
						}>
						Active
					</p>
					<p
						className={`cursor-pointer text-DarkGrayishBlue hover:text-VeryDarkBlue ${
							!isFiltered.isFilteredActive &&
							isFiltered.isFilteredCompleted &&
							"text-BrightBlue font-bold"
						}`}
						onClick={() =>
							setIsFiltered((prev) => ({
								...prev,
								isFilteredCompleted: true,
								isFilteredActive: false,
							}))
						}>
						Completed
					</p>
				</div>

				<p className="text-center my-6">Drag and drop to reorder list</p>
			</div>
		</main>
	);
}

export default App;
