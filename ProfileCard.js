function ProfileCard({ title, handle }) {
  // const title = props.title;
  // comst hnadle = props.handle; this code is equivalent to the following code due to object destructuring
  // still typing this lime: const { title, handle } = props;

  return (
    <div>
      <div>title is {title}</div>;<div>handle is {handle}</div>;
    </div>
  );
}
export default ProfileCard;
