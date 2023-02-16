import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Display({ id, name, address, phone, setrf, state }) {
  const [form, setForm] = useState({
    name: name,
    address: address,
    phone: phone,
  });

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (name !== form.name) {
      setForm({ name: name, address: address, phone: phone });
    }
  }, [id, name, phone]);
  const update = async (id, e) => {
    e.preventDefault();

    console.log(form);
    try {
      setDisable(true);
      const res = await axios.put(`/users`, { ...form, id: id });
      console.log(res);
      setrf(!state);
    } catch (error) {
      console.log(error);
    }
    setDisable(true);
  };

  const Delete = async (id) => {
    try {
      setDisable(true);
      console.log(id);
      const res = await axios.delete(`/users`, { data: { id } });
      console.log(res);
      setrf(!state);
    } catch (error) {
      console.log(error);
    }
    setDisable(false);
  };
  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex text-lg font-semibold justify-evenly box-border rounded-md mx-4 text-center border-gray-800 border-solid border-2 my-1">
      <p className="border-r-2 w-40  border-gray-800 px-2 py-2">{name}</p>
      <p className="border-r-2 w-40 border-gray-800 px-2 py-2">{address}</p>
      <p className="border-r-2 w-40 border-gray-800 px-2 py-2">{phone}</p>

      <div className="px-2 py-2 w-40">
        <Popup
          trigger={
            <button className="bg-blue-600  hover:bg-blue-700 mx-1 py-1 px-1 rounded-lg text-white font-serif text-sm ">
              update
            </button>
          }
          className="rounded-lg"
          modal
          nested
        >
          {(close) => (
            <form className="grid grid-cols-1  p-5  gap-y-3 text-lg font-bold  lg:grid-cols-2 ">
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
                <div>
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
                    className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded
          lg:col-span-2
          
          "
                    onClick={(e) => {
                      update(id, e);

                      close();
                    }}
                    disabled={disable}
                  >
                    update
                  </button>
                </div>
              )}
            </form>
          )}
        </Popup>

        <button
          className="bg-red-600 hover:bg-red-700 mx-1 py-1 px-1 rounded-lg text-white font-serif text-sm "
          onClick={() => {
            Delete(id);
          }}
          disabled={disable}
        >
          delete
        </button>
      </div>
    </div>
  );
}
