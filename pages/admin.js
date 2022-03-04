import React, { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";
import Sidebar from "components/admin/Sidebar";

import AdminPersonalForm from "components/admin/AdminPersonalForm";
import AdminCategoriesForm from "components/admin/AdminCategoriesForm";
import { useAppContext } from "context/state";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseUtils/clientApp";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("categories");
  const [categories, setCategories] = useState([
    { id: "1", name: "Bebidas", products: "12" },
    { id: "2", name: "Frutas", products: "22" },
    { id: "3", name: "Dulces", products: "18" },
  ]);

  const { user, setUser } = useAppContext();

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user]);

  const loadUser = async () => {
    const docRef = doc(db, "stores", "33mia5Ex0noh0ZtiDVej");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      setUser(user);
    } else {
      console.log("No such document!");
    }
  };

  const getShowedTab = () => {
    if (selectedTab === "personal") {
      return <AdminPersonalForm />;
    } else if (selectedTab === "categories") {
      return <AdminCategoriesForm categories={categories} />;
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar
        selectedOption={selectedTab}
        setSelectedOption={setSelectedTab}
      />
      <div className="flex-1">{getShowedTab()}</div>
    </div>
  );
};

export default Admin;
