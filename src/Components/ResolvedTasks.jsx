const ResolvedTasks = ({ resolved }) => (
  <div>
    <h2 className="font-semibold mb-2 text-lg">Resolved Task</h2>
    {resolved.length === 0 ? (
      <p className="text-gray-500">No resolved tasks yet.</p>
    ) : (
      <ul className="space-y-3">
        {resolved.map((task) => (
          <li
            key={task.id}
            className="text-sm text-gray-700 p-3 rounded-md"
            style={{ backgroundColor: "#E0E7FF" }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ResolvedTasks;
