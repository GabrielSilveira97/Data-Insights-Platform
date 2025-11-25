import UsersTable from "@/components/tables/UsersTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Page",
  description: "This is the users page of the Data Insights Platform.",
  openGraph: {
    title: "Users Page",
    description: "This is the users page of the Data Insights Platform.",
    siteName: "Data Insights Platform",
  },
};

const UsersPage = () => {
  return (
    <main>
      <h1>Users Page</h1>
      <UsersTable />
    </main>
  );
};

export default UsersPage;
