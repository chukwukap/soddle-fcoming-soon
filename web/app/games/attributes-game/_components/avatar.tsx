const Avatar = ({ url }: { url?: string }) => (
  <div className="w-10 h-10 self-center">
    <img
      src={url || '/images/default-avatar.png'}
      alt="User avatar"
      className="w-full h-full object-cover"
    />
  </div>
);
export default Avatar;
