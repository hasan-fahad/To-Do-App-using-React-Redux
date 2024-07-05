
// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import ToDoCard from "./ToDoCard";
import ToDoFilter from "./ToDoFilter";


const ToDoContainer = () => {
  // From local state
  // const {todos} = useAppSelector((state) => state.todos);

  // From Server

  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined)
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal/>
        <ToDoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">

        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        
       { todos?.data?.map(item => (<ToDoCard {...item}/>) )}
        
        </div>
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
          {""}
          
        </div> */}
        
      </div>
    </div>
  );
};

export default ToDoContainer;
