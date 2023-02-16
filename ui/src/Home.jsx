import axios from "axios";
import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  const [data, setData] = useState([{}]);
  const [ref, setRef] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const res = await axios.get("/users");
        setData(res.data);
        setloading(false);
      } catch (error) {
        setloading(false);
        console.log(error);
      }
    })();
  }, [ref]);

  return (
    <div className=" flex justify-center">
      {loading ? (
        <ClipLoader
          color={"#000"}
          loading={loading}
          size={80}
          cssOverride={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {data?.map((item, index) => {
            return (
              <Display
                key={index}
                id={item._id}
                name={item.name}
                address={item.address}
                phone={item.phone}
                state={ref}
                setrf={setRef}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
