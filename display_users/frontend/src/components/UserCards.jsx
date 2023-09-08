import { useState, useEffect } from "react";
import SingleUserCard from "./SingleUserCard";
import { URL_API } from "../constants";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    setUsers(undefined);

    const controller = new AbortController();
    fetch(URL_API, { signal: controller.signal })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <section>
        {loading ? <h2>Loading...</h2> : null}
        {error != null ? <h2>Error</h2> : null}
        {users
          ? users.map((user) => {
              return <SingleUserCard key={user.pk} {...user} />;
            })
          : null}
      </section>
    </>
  );
};

export default UserCards;
