class Todo {
    id: number;
    text: string;
    static i: number = 0;
    constructor(todoText: string) {
        Todo.i = Todo.i + 1
        this.id = Todo.i;
        this.text = todoText;
    }

}
export default Todo;