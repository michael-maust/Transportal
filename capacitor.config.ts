import {CapacitorConfig} from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "Transportal.app",
  appName: "Transportal",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.172.110:3000",
    cleartext: true,
  },
};

export default config;
