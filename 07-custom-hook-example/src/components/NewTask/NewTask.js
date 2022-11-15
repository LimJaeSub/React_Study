

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import usehttp from '../../hooks/use-http';

const NewTask = (props) => {
  const {isLoading,error,sendRequest:sendTaskRequest} = usehttp();
  // @ sendTastRequest == sendRequest(requestconfig)

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({
      url:'https://customhook-b2809-default-rtdb.firebaseio.com//tasks.json',
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ text: taskText })
    })

    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://customhook-b2809-default-rtdb.firebaseio.com//tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
