import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
}

const service = new Services();

export default service;