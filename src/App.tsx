import { useEffect, useState } from 'react';

const generateUsers = () => {
  return [
    {
      id: 1,
      name: 'Alex Johnson',
      age: 25,
    },
    {
      id: 2,
      name: 'Benjamin Lee',
      age: 32,
    },
    {
      id: 3,
      name: 'Catherine Davis',
      age: 28,
    },
    {
      id: 4,
      name: 'Daniel Brown',
      age: 30,
    },
    {
      id: 5,
      name: 'Ella Martinez',
      age: 27,
    },
    {
      id: 6,
      name: 'Finnegan Campbell',
      age: 31,
    },
    {
      id: 7,
      name: 'Grace Taylor',
      age: 29,
    },
    {
      id: 8,
      name: 'Harrison Mitchell',
      age: 26,
    },
    {
      id: 9,
      name: 'Isabelle Robinson',
      age: 33,
    },
    {
      id: 10,
      name: 'Jacob Perez',
      age: 24,
    },
  ];
};

function App() {
  const [users, setUsers] = useState<
    { id: number; name: string; age: number }[]
  >([]);
  useEffect(() => {
    setUsers(generateUsers());
  }, []);
  useEffect(() => {
    document.title = `${users.length} users Left`;
  }, [users]);

  const deleteRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setUsers((prevUsers) =>
      prevUsers.filter((_, index) => index !== randomIndex)
    );
  };
  return (
    <>
      <div className='App'>
        <div>
          <h1
            style={{
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '50px',
            }}
          >
            Hi
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {users.map((user, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#3e3e3e',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '340px',
                  height: '100px',
                  margin: '15px 40px',
                  borderRadius: '5px',
                }}
              >
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{
                marginTop: '55px',
                width: '250px',
                height: '75px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              onClick={deleteRandomUser}
            >
              <h3>Delete Random User</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
