import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance';

export interface Iuser {
  name?: string;
  password?: string;
}

export class User {
  name: string | undefined;
  password: string | undefined;

  constructor(name:string | undefined, password: string | undefined) {
    this.name = name;
    this.password = password;
  };
};

@Module({ name: 'login', stateFactory: true, namespaced: true })
export default class Login extends VuexModule {
  private user: Iuser = {
    name: undefined,
    password: undefined
  };
  private tenantId:string = ''

  public get $currentUser() {
    return this.user
  };

  public get $tenantId() {
    return this.tenantId
  };

  @Mutation
  private AUTHUSER({name, password}:Iuser) {
    this.user = new User(name, password);
  };

  private SET_TENANTID(tenantId:string) {
    this.tenantId = tenantId;
  };

  @Action
  public async setTenantId() {
    const tenantId = await $axios.post('http://140.238.184.49:3000/signin',this.$currentUser);
    console.log(tenantId);
    this.context.commit('SET_TENANTID',tenantId);
  };

  public authenticate(user:Iuser) {
    this.context.commit('AUTHUSER',user);
  };
};