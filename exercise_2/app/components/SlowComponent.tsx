const SlowComponent = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  return (
   <div>
      <h2 className="text-2xl font-bold">
        Slow Component Loaded
      </h2>
    </div>
  );
};

export default SlowComponent;