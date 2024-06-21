const Profile = ({ user }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">User Profile</h1>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
};

export default Profile;
