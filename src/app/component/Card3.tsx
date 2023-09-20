const Card3 = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-center mb-6">
        <span className="text-2xl font-semibold text-blue-600">
          Our Services
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">Mobile Development</h5>
          <p className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">Web Development</h5>
          <p  className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">Desktop Application Development</h5>
          <p  className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">POS Development</h5>
          <p  className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">Hosting Service</h5>
          <p  className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-center">Software consultation</h5>
          <p  className="text-center">Empowering Your Digital Presence with Expert Web Development</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
