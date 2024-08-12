import UserRow from './user-row';
const UserList = () => {
  const users = [
    {
      age: 12,
      country: 'USA',
      type: 'Human',
      year: 2012,
      hasAdditionalInfo: true,
      hasBitcoin: true,
    },
    {
      age: 30,
      country: 'USA',
      type: 'Human',
      year: 2009,
      hasAdditionalInfo: false,
      hasBitcoin: false,
    },
  ];

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-between">
        <span>KOL</span>
        <span>Age</span>
        <span>Country</span>
        <span>Pfp</span>
        <span className="leading-none">
          Account <br /> Creation
        </span>
        <span>Followers</span>
        <span>Ecosystem</span>
      </div>
      {users.map((user, index) => (
        <UserRow key={index} {...user} />
      ))}
    </div>
  );
};

export default UserList;
