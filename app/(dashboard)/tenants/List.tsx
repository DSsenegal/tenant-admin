// "use server";

import { DataTable } from "@/components/Datatable";
import { columns } from "./columns";
import { Tenant } from "@/types/core";
import React from "react";
import { TenantListDocument } from "@/graphql/generated/client";
import { client, createApolloClient } from "@/context/ApolloPrivider";
import { getClient } from "@/lib/apollo-client";
// import { client } from "@/context/ApolloPrivider";

const TenantList = async () => {
  // const client  = createApolloClient();
  const { data, loading, error } = await getClient().query({
    query: TenantListDocument,
    // fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return <DataTable columns={columns} data={data?.tenants} />;
};

export default TenantList;
