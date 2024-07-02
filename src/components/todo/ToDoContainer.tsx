
import AddTodoModal from "./AddTodoModal";
import ToDoCard from "./ToDoCard";
import ToDoFilter from "./ToDoFilter";


const ToDoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal/>
        <ToDoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">

        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
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
