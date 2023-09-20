const Card3 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-6">
        <span className="text-2xl font-semibold text-blue-600">Our Services</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 1</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 2</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 3</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 4</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 5</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Service 6</p>
        </div>
    </div>
</div>
  );
};

export default Card3;
