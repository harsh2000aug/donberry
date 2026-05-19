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
  tracks: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/tracks/",
    },
  },
  songs: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/songs/",
    },
  },
};
