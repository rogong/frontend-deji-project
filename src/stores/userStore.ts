import { observable, computed, action,  runInAction, makeObservable } from "mobx";
import agent from "../api/agent";
import { RootStore } from './rootStore';
import { IUser, IUserFormValues } from "../model";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

export default class UserStore {
    rootStore: RootStore;
  

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;


   @action isLoggedIn = async()  =>{
        return !this.user;
    }

    @action login = async (values: IUserFormValues) => {
        try {
            const user = await agent.User.login(values);
          runInAction(() => {
            this.user = user
          });
          this.rootStore.commonStore.setToken(user.token);
          this.rootStore.modalStore.closeModal();
        
           return redirect('/')
        
        } catch (error) {
            throw error;
        }
    }

    @action register = async (values: IUserFormValues) => {
        try {
            const user = await agent.User.register(values);
          runInAction(() => {
            this.user = user
          });
          this.rootStore.commonStore.setToken(user.token);
          this.rootStore.modalStore.closeModal();
          redirect('/');
        } catch (error) {
            throw error;
        }
    }


    @action getUser = async () => {
        try {
            const user = await agent.User.current();
            runInAction(() => {
                this.user = user;
            })
        } catch (error) {
            console.log(error);
        }
    }

    @action logout = () => {
        this.rootStore.commonStore.setToken(null);
        this.user = null;
        //history.push('/')
    };

    



}