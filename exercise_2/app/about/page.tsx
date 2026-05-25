export const dynamic = "force-static";

const Page = () => {
  const now = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Current server time: {now}</p>
    </div>
  );
};

export default Page;