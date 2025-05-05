{
  //
  //promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to resolve");
      }
    });
  };

  const showData = async (): Promise<string> => {
    const data = await createPromise();
    console.log(data);
    return data;
  };

  showData();

  interface Todo {
    userId: number;
    id: 2;
    title: string;
    completed: false;
  }

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data: Todo = await response.json();
    console.log(data);
    return data;
  };

  getTodo();

  //
}
