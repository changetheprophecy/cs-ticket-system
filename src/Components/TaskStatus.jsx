const TaskStatus = ({ taskStatus, onComplete }) => {
  return (
    <div>
      <h2 className="font-semibold mb-2 text-lg">Task Status</h2>
      {taskStatus.length === 0 ? (
        <p className="text-gray-500 mb-2">
          Select a ticket to add to Task Status
        </p>
      ) : (
        <div className="space-y-3">
          {taskStatus.map((task) => (
            <div
              key={task.id}
              className="bg-white border border-gray-200 rounded-md p-3"
            >
              <p className="text-sm font-medium mb-2">{task.title}</p>
              <button
                onClick={() => onComplete(task)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition w-full"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
