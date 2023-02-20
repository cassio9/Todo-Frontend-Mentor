import { useEffect, useState } from "react";
import "./App.css";
import InputMain from "./components/InputMain";
import TodoContainer from "./components/TodoContainer";

function App() {
	const todoLocalStorage = localStorage.getItem("todoFrontendMentor");
	const todoParse = todoLocalStorage !== null ? JSON.parse(todoLocalStorage) : [];

	const [mainTodo, setMainTodo] = useState<
		{
			task: string;
			isCompleted: boolean;
			id: string;
		}[]
	>(todoParse);

	const [isFiltered, setIsFiltered] = useState({
		isFilteredCompleted: false,
		isFilteredActive: false,
	});

	useEffect(() => {
		localStorage.setItem("todoFrontendMentor", JSON.stringify(mainTodo));
	}, [mainTodo]);

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
		<main className="font-Josefin bg-VeryLightGrayishBlue dark:bg-VeryDarkBlue min-h-screen dark:text-DarkGrayishBlue max-h-fit ">
			<InputMain setMainTodo={setMainTodo} mainTodo={mainTodo} />
			<div className="-translate-y-16 max-w-xl mx-auto px-10">
				<div className="mt-5 rounded-lg bg-white dark:bg-VeryDarkUnsaturatedBlue">
					{mainTodo && isFiltered.isFilteredActive ? (
						filterActive.map((todo) => (
							<TodoContainer key={todo.id} todo={todo} setMainTodo={setMainTodo} />
						))
					) : isFiltered.isFilteredCompleted ? (
						filterCompleted.map((todo) => (
							<TodoContainer key={todo.id} todo={todo} setMainTodo={setMainTodo} />
						))
					) : (
						<div>
							{mainTodo.map((todo) => {
								return (
									<div key={todo.id}>
										<TodoContainer todo={todo} setMainTodo={setMainTodo} />
									</div>
								);
							})}
						</div>
					)}
					<div className="flex justify-between p-4 ">
						<p className="text-DarkGrayishBlue dark:text-DarkGrayishBlue">{countLeft} items left</p>
						<p
							className="cursor-pointer text-DarkGrayishBlue hover:text-VeryDarkBlue dark:text-DarkGrayishBlue "
							onClick={clearCompleted}>
							Clear Completed
						</p>
					</div>
				</div>
				<div className="flex gap-6 mt-5 rounded-lg bg-white mx-auto justify-center p-4  dark:bg-VeryDarkUnsaturatedBlue">
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
				{/* <p className="text-center pt-4">Drag and drop to reorder list</p> */}
			</div>
		</main>
	);
}

export default App;
