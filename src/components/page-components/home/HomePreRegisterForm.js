import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "@firebase/firestore";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";

import Button from "components/ui-components/Button";
import Input from "components/ui-components/form-elements/Input";
import Select from "components/ui-components/form-elements/Select";
import { firestore } from "utils/firebase";

const requirementOptions = ["Recruit New Talent", "Find a Job"];
const initialPreRegisterInputs = {
  name: {
    value: "",
    isValid: true,
  },
  email: {
    value: "",
    isValid: true,
  },
  requirement: {
    value: "",
    isValid: true,
  },
};

const HomePreRegisterForm = () => {
  const [preRegisterInputs, setPreRegisterInputs] = useState(
    initialPreRegisterInputs
  );
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPreRegisterInputs((state) => {
      return { ...state, [name]: { ...state[name], value } };
    });
  };

  const resetPreRegistrationInputsHandler = () => {
    setPreRegisterInputs(initialPreRegisterInputs);
  };

  const preRegisterSubmitHandler = async (event) => {
    setIsLoading(true);
    try {
      event.preventDefault();

      // === Form validations ===
      const name = preRegisterInputs?.name?.value;
      const email = preRegisterInputs?.email?.value;
      const requirement = preRegisterInputs?.requirement?.value;
      if (!name) {
        toast.error("Enter a Valid Name.");
        setIsLoading(false);
        return;
      }
      if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        toast.error("Enter a Valid Email.");
        setIsLoading(false);
        return;
      }
      if (!requirement) {
        toast.error("Requirement Can't be Empty.");
        setIsLoading(false);
        return;
      }
      // === Form validations ===

      const q = query(
        collection(firestore, "PreRegistrations"),
        where("email", "==", email)
      );
      const existingRegistration = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        existingRegistration.push(doc.data());
      });
      if (existingRegistration[0]) {
        toast.error("Email Already Registered!");
        setIsLoading(false);
        return;
      }

      const ref = collection(firestore, "PreRegistrations");
      let data = {
        name,
        email,
        requirement,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      const docRef = await addDoc(ref, data);
      if (docRef.id) {
        toast.success("Pre-Registered Successfully");
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!");
    }
    setIsLoading(false);
    resetPreRegistrationInputsHandler();
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: 2,
      }}
    >
      <Input
        id="name"
        name="name"
        label="Name"
        value={preRegisterInputs?.name?.value}
        onChange={onChangeHandler}
      />

      <Input
        id="email"
        name="email"
        label="Email Address"
        value={preRegisterInputs?.email?.value}
        onChange={onChangeHandler}
      />

      <Select
        id="requirement"
        name="requirement"
        label="What do you want from Turbo Talent?"
        options={requirementOptions}
        value={preRegisterInputs?.requirement?.value}
        onChange={onChangeHandler}
        placeholder="I want to.."
      />

      <Button
        variant="contained"
        loading={isLoading}
        onClick={preRegisterSubmitHandler}
      >
        Contained
      </Button>
    </Box>
  );
};

export default HomePreRegisterForm;
