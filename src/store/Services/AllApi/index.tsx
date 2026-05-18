import { callApi } from "../../../Utils/api/apiUtils";
import { allApi } from "../../Endpoints/AllApi/index";

export const contact = ({ body }: any) =>
  callApi({
    uriEndPoint: allApi.contact.v1,
    body,
  });
export const enquiryForm = ({ body }: any) =>
  callApi({
    uriEndPoint: allApi.enquiryForm.v1,
    body,
  });
