import make_endpoint from './entryPoint';
import ajaxPromise from './ajaxPromise';

const getTaskList = ({ complete = undefined }) => {
  const ajaxOptions = {
    url: make_endpoint('/api/tasks/'),
    type: 'GET',
  };
  if (complete != undefined) {
    ajaxOptions['data'] = {complete};
  }
  return ajaxPromise(ajaxOptions);
}
  


const createTask = (task) =>
  ajaxPromise({
    url: make_endpoint('/api/tasks/'),
    dataType: "json",
    type: 'POST',
    data: task,
  });

const updateTask = (task) =>
  ajaxPromise({
    url: make_endpoint(`/api/tasks/${ task.id }/`),
    dataType: "json",
    type: 'PATCH',
    data: task
  });

const deleteTask = (task) =>
  ajaxPromise({
    url: make_endpoint(`/api/tasks/${ task.id }/`),
    type: 'DELETE',
  });

const tasksApi = {
    getTaskList,
    createTask,
    updateTask,
    deleteTask
};

export default tasksApi;