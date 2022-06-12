import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ad = {
  __typename?: 'Ad';
  bgColor?: Maybe<Scalars['String']>;
  bgImage: Image;
  components: Array<Component>;
  createdAt: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  isPremium: Scalars['Boolean'];
  title: Scalars['String'];
  user: User;
  viewCount: Scalars['Int'];
  width: Scalars['Int'];
};

export type AdInput = {
  bgColor?: InputMaybe<Scalars['String']>;
  bgImage: Scalars['ID'];
  components: Array<Scalars['ID']>;
  height: Scalars['Int'];
  isPremium: Scalars['Boolean'];
  title: Scalars['String'];
  user: Scalars['ID'];
  viewCount: Scalars['Int'];
  width: Scalars['Int'];
};

export type Admin = {
  __typename?: 'Admin';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type AdminInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Component = {
  __typename?: 'Component';
  CompId: Scalars['ID'];
  CompType: Scalars['String'];
  ad: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  tw: Scalars['String'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  zoom: Scalars['Int'];
};

export type ComponentInput = {
  CompId: Scalars['ID'];
  CompType: Scalars['String'];
  ad: Scalars['String'];
  tw: Scalars['String'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  zoom: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  src: Scalars['String'];
  user: Scalars['String'];
};

export type ImageInput = {
  alt: Scalars['String'];
  src: Scalars['String'];
  user: Scalars['String'];
};

export type ImgComp = {
  __typename?: 'ImgComp';
  createdAt: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  image: Image;
  width: Scalars['Int'];
};

export type ImgCompInput = {
  height: Scalars['Int'];
  image: Scalars['ID'];
  width: Scalars['Int'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd?: Maybe<Ad>;
  createComponent?: Maybe<Component>;
  createImage?: Maybe<Image>;
  createImgComp?: Maybe<ImgComp>;
  createQrCodeComp?: Maybe<QrCodeComp>;
  createTextComp?: Maybe<TextComp>;
  deleteAd?: Maybe<Ad>;
  deleteComponent?: Maybe<Component>;
  deleteImage?: Maybe<Image>;
  login?: Maybe<User>;
  loginAdmin?: Maybe<Admin>;
  register?: Maybe<User>;
  registerAdmin?: Maybe<Admin>;
  setFreemium?: Maybe<Ad>;
  setPremium?: Maybe<Ad>;
  setStatus?: Maybe<Ad>;
};


export type MutationCreateAdArgs = {
  input: AdInput;
};


export type MutationCreateComponentArgs = {
  input: ComponentInput;
};


export type MutationCreateImageArgs = {
  input?: InputMaybe<ImageInput>;
};


export type MutationCreateImgCompArgs = {
  input: ImgCompInput;
};


export type MutationCreateQrCodeCompArgs = {
  input: QrCodeCompInput;
};


export type MutationCreateTextCompArgs = {
  input: TextCompInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteComponentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationLoginAdminArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationRegisterAdminArgs = {
  input?: InputMaybe<AdminInput>;
};


export type MutationSetFreemiumArgs = {
  id: Scalars['ID'];
};


export type MutationSetPremiumArgs = {
  id: Scalars['ID'];
};


export type MutationSetStatusArgs = {
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type QrCodeComp = {
  __typename?: 'QrCodeComp';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  image: Image;
  url: Scalars['String'];
};

export type QrCodeCompInput = {
  image: Scalars['ID'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAdminById?: Maybe<Admin>;
  getAllAdmins: Array<Maybe<Admin>>;
  getAllAds?: Maybe<Array<Maybe<Ad>>>;
  getAllAdsByUser?: Maybe<Array<Maybe<Ad>>>;
  getAllComponents?: Maybe<Array<Maybe<Component>>>;
  getAllComponentsByAd?: Maybe<Array<Maybe<Component>>>;
  getAllImages?: Maybe<Array<Maybe<Image>>>;
  getAllImagesByUser?: Maybe<Array<Maybe<Image>>>;
  getAllImgComps?: Maybe<Array<Maybe<ImgComp>>>;
  getAllQrCodeComps?: Maybe<Array<Maybe<QrCodeComp>>>;
  getAllTextComps?: Maybe<Array<Maybe<TextComp>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getUserById?: Maybe<User>;
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetAllAdsByUserArgs = {
  user: Scalars['ID'];
};


export type QueryGetAllComponentsByAdArgs = {
  ad: Scalars['String'];
};


export type QueryGetAllImagesByUserArgs = {
  user: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export type TextComp = {
  __typename?: 'TextComp';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
};

export type TextCompInput = {
  content: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Ad: ResolverTypeWrapper<Ad>;
  AdInput: AdInput;
  Admin: ResolverTypeWrapper<Admin>;
  AdminInput: AdminInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Component: ResolverTypeWrapper<Component>;
  ComponentInput: ComponentInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  ImageInput: ImageInput;
  ImgComp: ResolverTypeWrapper<ImgComp>;
  ImgCompInput: ImgCompInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  QrCodeComp: ResolverTypeWrapper<QrCodeComp>;
  QrCodeCompInput: QrCodeCompInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TextComp: ResolverTypeWrapper<TextComp>;
  TextCompInput: TextCompInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Ad: Ad;
  AdInput: AdInput;
  Admin: Admin;
  AdminInput: AdminInput;
  Boolean: Scalars['Boolean'];
  Component: Component;
  ComponentInput: ComponentInput;
  ID: Scalars['ID'];
  Image: Image;
  ImageInput: ImageInput;
  ImgComp: ImgComp;
  ImgCompInput: ImgCompInput;
  Int: Scalars['Int'];
  LoginInput: LoginInput;
  Mutation: {};
  QrCodeComp: QrCodeComp;
  QrCodeCompInput: QrCodeCompInput;
  Query: {};
  String: Scalars['String'];
  TextComp: TextComp;
  TextCompInput: TextCompInput;
  User: User;
  UserInput: UserInput;
};

export type AdResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']> = {
  bgColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  components?: Resolver<Array<ResolversTypes['Component']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPremium?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Component'] = ResolversParentTypes['Component']> = {
  CompId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  CompType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ad?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tw?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  zoom?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImgCompResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImgComp'] = ResolversParentTypes['ImgComp']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAd?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationCreateAdArgs, 'input'>>;
  createComponent?: Resolver<Maybe<ResolversTypes['Component']>, ParentType, ContextType, RequireFields<MutationCreateComponentArgs, 'input'>>;
  createImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<MutationCreateImageArgs>>;
  createImgComp?: Resolver<Maybe<ResolversTypes['ImgComp']>, ParentType, ContextType, RequireFields<MutationCreateImgCompArgs, 'input'>>;
  createQrCodeComp?: Resolver<Maybe<ResolversTypes['QrCodeComp']>, ParentType, ContextType, RequireFields<MutationCreateQrCodeCompArgs, 'input'>>;
  createTextComp?: Resolver<Maybe<ResolversTypes['TextComp']>, ParentType, ContextType, RequireFields<MutationCreateTextCompArgs, 'input'>>;
  deleteAd?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationDeleteAdArgs, 'id'>>;
  deleteComponent?: Resolver<Maybe<ResolversTypes['Component']>, ParentType, ContextType, RequireFields<MutationDeleteComponentArgs, 'id'>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationDeleteImageArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  loginAdmin?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType, Partial<MutationLoginAdminArgs>>;
  register?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationRegisterArgs>>;
  registerAdmin?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType, Partial<MutationRegisterAdminArgs>>;
  setFreemium?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationSetFreemiumArgs, 'id'>>;
  setPremium?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationSetPremiumArgs, 'id'>>;
  setStatus?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationSetStatusArgs, 'id' | 'status'>>;
};

export type QrCodeCompResolvers<ContextType = Context, ParentType extends ResolversParentTypes['QrCodeComp'] = ResolversParentTypes['QrCodeComp']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAdminById?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType, RequireFields<QueryGetAdminByIdArgs, 'id'>>;
  getAllAdmins?: Resolver<Array<Maybe<ResolversTypes['Admin']>>, ParentType, ContextType>;
  getAllAds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ad']>>>, ParentType, ContextType>;
  getAllAdsByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ad']>>>, ParentType, ContextType, RequireFields<QueryGetAllAdsByUserArgs, 'user'>>;
  getAllComponents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Component']>>>, ParentType, ContextType>;
  getAllComponentsByAd?: Resolver<Maybe<Array<Maybe<ResolversTypes['Component']>>>, ParentType, ContextType, RequireFields<QueryGetAllComponentsByAdArgs, 'ad'>>;
  getAllImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  getAllImagesByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, RequireFields<QueryGetAllImagesByUserArgs, 'user'>>;
  getAllImgComps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImgComp']>>>, ParentType, ContextType>;
  getAllQrCodeComps?: Resolver<Maybe<Array<Maybe<ResolversTypes['QrCodeComp']>>>, ParentType, ContextType>;
  getAllTextComps?: Resolver<Maybe<Array<Maybe<ResolversTypes['TextComp']>>>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type TextCompResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TextComp'] = ResolversParentTypes['TextComp']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Ad?: AdResolvers<ContextType>;
  Admin?: AdminResolvers<ContextType>;
  Component?: ComponentResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ImgComp?: ImgCompResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  QrCodeComp?: QrCodeCompResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TextComp?: TextCompResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

