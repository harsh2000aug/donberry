import { defaults } from "../default";

export const allApi = {
  contact: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/contact-us/",
    },
  },

  enquiryForm: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/enquiry/",
    },
  },
};
