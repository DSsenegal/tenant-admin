// "use client";

import { Button } from "@saleor/macaw-ui";
import { FormattedMessage } from "react-intl";
import TenantList from "./List";

const page = () => {
  return (
    <div className="grid gap-8">
      <div className="flex justify-between">
        <h1 className="text-bold text-xl">
          {/* <FormattedMessage
            id="tenants"
            defaultMessage="Tenants"
            description="page header"
          /> */}
        </h1>
        {/* <Button
          data-test-id="create-order-button"
          // onClick={onAdd}
          // disabled={limitsReached || !hasAccessibleChannels}
        >
          <FormattedMessage
            id="LshEVn"
            defaultMessage="Create tenant"
            description="button"
          />
        </Button> */}
      </div>
      <TenantList />
    </div>
  );
};

export default page;
