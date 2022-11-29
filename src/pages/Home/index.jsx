import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
import State from "../../components/State";
// import { TextField } from "@material-ui/core";
// import TextField from "@mui/material/TextField";
// import { Autocomplete } from "@mui/material";
import IdentityInput from "../../components/Identity";
import Adress from "../../components/Adress";
import Departments from "../../components/Departments";

export default function Home() {
  const {
    // register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });

  // console.log("errors", errors);

  const [data, setData] = useState(null);

  // const [value, setValue] = useState("");
  // const [valid, setValid] = useState(true);

  // const handleValidation = (e) => {
  //   setValue(e.target.value);
  //   const reg = new RegExp("[A-Za-z]");
  //   setValid(reg.test(e.target.value));
  //   console.log("isValid?", reg.test(e.target.value));
  // };

  useEffect(() => {
    /* This is a ternary operator. It is saying if there is something in localStorage, then parse it
    and set it to employees. If there is nothing in localStorage, then set employees to an empty
    array. */
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  return (
    <main className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(setData)}>
          <IdentityInput
            control={control}
            name="firstName"
            label="First name"
          />
          <IdentityInput control={control} name="lastName" label="Last name" />

          <section>
            <Calendar control={control} name="birthDay" label="Date of Birth" />
            <Calendar control={control} name="startDate" label="Start Date" />
          </section>

          <section className="adressSection">
            <p>Adress</p>
            <Adress
              control={control}
              controllerPattern={/^[_A-z0-9_ -]*((-|\s)*[_A-z0-9_ -])*$/g}
              inputPropsPattern="[A-Za-z0-9_ -]{3,30}"
              minLength="3"
              maxLength="30"
              name="street"
              label="Street"
            />
            <Adress
              control={control}
              controllerPattern={/^[_A-z_ -]*((-|\s)*[_A-z_ -])*$/g}
              inputPropsPattern="[A-Za-z_ -]{3,30}"
              minLength="3"
              maxLength="30"
              name="city"
              label="City"
            />
            <State control={control}></State>
          </section>
          <Adress
            control={control}
            controllerPattern={/^[_0-9_ -]*((-|\s)*[_0-9_ -])*$/g}
            inputPropsPattern="[0-9_ -]{4,9}"
            minLength="4"
            maxLength="9"
            name="zipCode"
            label="Zip Code"
          />
          <Departments control={control} />
          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
