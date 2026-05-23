type Props = {
    params: {
      username: string;
    };
  };
  
  export default function UserPage({ params }: Props) {
    return (
      <div>
        <h1>Welcome, {params.username}</h1>
      </div>
    );
  }