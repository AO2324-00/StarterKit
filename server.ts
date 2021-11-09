import { System, Config } from "https://raw.githubusercontent.com/PuddleServer/Puddle/develop/mod.ts";

System.listen("./config/.env", (conf: Config)=>{
    console.log(`The server running on http://${conf.SERVER.HOSTNAME}:${conf.SERVER.PORT}`);
});
