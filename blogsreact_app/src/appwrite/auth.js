import {Client,Account,ID} from 'appwrite'
import conf from '../conf/config';

export class AuthServices{

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
           const userAcount= await this.account.create(ID.unique(),email,password,name)
           if(userAcount){

               this.loginUser(email,password)
           } 
           else{
            return userAcount
           }

        }catch(error){
            throw error;
        }
    }


    async loginUser({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            throw error;
            
        }
    }

    async getCurrentUser(){
            try {

               return await this.account.get()
                
            } catch (error) {
                throw error;
                
            }


            return null
           
    }


    async deleteUser(){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            
            throw error;
        }
    }
}



const authService = new AuthServices();
export default authService