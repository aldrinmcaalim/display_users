const SingleUserCard = ({ name, email, phone, address }) => {
  return (
    <>
      <article>
        <h2>{name}</h2>
        <h4>
          {email} | {phone}
        </h4>
        <h5>{address}</h5>
      </article>
    </>
  );
};

export default SingleUserCard;
