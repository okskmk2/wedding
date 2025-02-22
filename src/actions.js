import axios from "axios";

export const API_KEY_NINJAS = "6QebjEJUs/oqGrwj8VHZIQ==vVT11eX2cbnT2W8P";

export async function getPublicIP() {
  const res = await axios.get("https://api.ipify.org", {
    params: {
      format: "json",
    },
  });
  return res.data;
}

export async function iplookup(idAddress) {
  const res = await axios.get("https://api.api-ninjas.com/v1/iplookup", {
    params: {
      address: idAddress,
    },
    headers: {
      "X-Api-Key": API_KEY_NINJAS,
    },
  });
  return res.data;
}

export async function getVisitorInfo() {
  const { ip } = await getPublicIP();
  return iplookup(ip);
}
