import { GetStartedItem } from "../GetStarted";

interface GetStartedContainerProps {
  items: GetStartedItem[];
}
const GetStartedContainer = ({ items }: GetStartedContainerProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
                <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="text-blue-400 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GetStartedContainer;