import ToDoContainer from "@/components/todo/ToDoContainer";
import Container from "@/components/ui/Container";




const Todo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-semibold my-10">My ToDos Page</h1>
            <ToDoContainer/>
        </Container>
    );
};

export default Todo;