import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }



  async updatePost(slug,{title, slug, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            
           
        {
          title,
          content,
          featuredImage,
          status          
        }
      )
        
    } catch (error) {
        throw error;
        
    }

  }


  async deleteDocument(slug){
   try {
     return await this.databases.deleteDocument(
       conf.appwriteDatabaseId,
       conf.appwriteCollectionId,
       slug
     )
   } catch (error) {
    throw error;
    
   }
  }


  async getDocumentById(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      
      
    } catch (error) {
      throw error
      return false
      
    }
  }


  async listDocument(queries=[Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
      
    } catch (error) {
      console.log('error listing the data',error)
      return false
      
    }
  }


  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
      
    } catch (error) {
      console.log(error)
      
    }
  }


  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      
    } catch (error) {
      console.log(error)
      
    }
  }


  async getFilePreview(fileId){
    try {
      
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log(error)
      
    }
  }
}

const service = new Service();
export default service;
