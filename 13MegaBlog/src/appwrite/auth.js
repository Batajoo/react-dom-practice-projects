import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setProject(conf.appwriteProjectId);
        this.account = new this.account(this.client);
    }
}

const authService = new AuthService();

export default authService;