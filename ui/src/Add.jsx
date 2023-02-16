import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Add = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [disable, setDisable] = useState(false);

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setDisable(true);
      const res = await axios.post("/users", form);

      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setDisable(false);
    setForm({
      name: "",
      address: "",
      phone: "",
    });
  };
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="flex flex-col w-1/2 justify-center items-center">
        <h1 className="text-center my-2 font-bold text-lg">Add Record </h1>

        {disable ? (
          <ClipLoader
            color={"#000"}
            loading={disable}
            size={80}
            cssOverride={true}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <form
            className="grid grid-cols-1  gap-x-1 gap-y-3 text-lg font-bold  lg:grid-cols-2 "
            onSubmit={submit}
          >
            <input
              type={"text"}
              placeholder={"Name"}
              onChange={handelChange}
              value={form.name}
              name="name"
            />
            <input
              type={"text"}
              placeholder={"Address"}
              onChange={handelChange}
              value={form.address}
              name="address"
            />

            <input
              type={"text"}
              placeholder={"Phone"}
              onChange={handelChange}
              value={form.phone}
              className="lg:col-span-2"
              name="phone"
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded
          lg:col-span-2
          
          "
              disabled={disable}
            >
              Add
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Add;
