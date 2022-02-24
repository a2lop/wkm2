import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Sidebar from "components/admin/Sidebar";

import PersonalForm from "components/admin/PersonalForm";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("personal");

  useEffect(() => {}, []);

  const router = useRouter();
  const { storeName } = router.query;

  return (
    <div className="flex flex-row">
      <Sidebar
        selectedOption={selectedTab}
        setSelectedOption={setSelectedTab}
      />
      <PersonalForm />
    </div>
  );
};

export default Admin;
