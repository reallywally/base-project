import ListComponent from "../../components/todo/ListComponent";

const ListPage: React.FC<Record<string, never>> = () => {
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>

      <ListComponent />
    </div>
  );
};

export default ListPage;
