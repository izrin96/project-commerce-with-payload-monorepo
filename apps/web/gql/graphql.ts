/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean'];
  categories?: Maybe<CategoriesAccess>;
  media?: Maybe<MediaAccess>;
  products?: Maybe<ProductsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Categories = {
  __typename?: 'Categories';
  docs?: Maybe<Array<Maybe<Category>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  title?: Maybe<CategoriesDocAccessFields_Title>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_CreatedAt = {
  __typename?: 'CategoriesDocAccessFields_createdAt';
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Title = {
  __typename?: 'CategoriesDocAccessFields_title';
  create?: Maybe<CategoriesDocAccessFields_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Title_Update>;
};

export type CategoriesDocAccessFields_Title_Create = {
  __typename?: 'CategoriesDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Title_Delete = {
  __typename?: 'CategoriesDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Title_Read = {
  __typename?: 'CategoriesDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Title_Update = {
  __typename?: 'CategoriesDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'CategoriesDocAccessFields_updatedAt';
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  title?: Maybe<CategoriesFields_Title>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_CreatedAt = {
  __typename?: 'CategoriesFields_createdAt';
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  __typename?: 'CategoriesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Delete = {
  __typename?: 'CategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Read = {
  __typename?: 'CategoriesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Update = {
  __typename?: 'CategoriesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Title = {
  __typename?: 'CategoriesFields_title';
  create?: Maybe<CategoriesFields_Title_Create>;
  delete?: Maybe<CategoriesFields_Title_Delete>;
  read?: Maybe<CategoriesFields_Title_Read>;
  update?: Maybe<CategoriesFields_Title_Update>;
};

export type CategoriesFields_Title_Create = {
  __typename?: 'CategoriesFields_title_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Title_Delete = {
  __typename?: 'CategoriesFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Title_Read = {
  __typename?: 'CategoriesFields_title_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Title_Update = {
  __typename?: 'CategoriesFields_title_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt = {
  __typename?: 'CategoriesFields_updatedAt';
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  __typename?: 'CategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Read = {
  __typename?: 'CategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Update = {
  __typename?: 'CategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Category_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Category_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Media = {
  __typename?: 'Media';
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createMedia?: Maybe<Media>;
  createProduct?: Maybe<Product>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteMedia?: Maybe<Media>;
  deletePreference?: Maybe<Preference>;
  deleteProduct?: Maybe<Product>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean'];
  updateCategory?: Maybe<Category>;
  updateMedia?: Maybe<Media>;
  updatePreference?: Maybe<Preference>;
  updateProduct?: Maybe<Product>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateProductArgs = {
  data: MutationProductInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePreferenceArgs = {
  key: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePreferenceArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateProductArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['JSON']>;
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type Product_Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Product_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Product_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Product_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Product_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Product_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Product_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Product_Where = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Product_Where_And = {
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Product_Where_Or = {
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Products = {
  __typename?: 'Products';
  docs?: Maybe<Array<Maybe<Product>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ProductsCreateAccess = {
  __typename?: 'ProductsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsCreateDocAccess = {
  __typename?: 'ProductsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsDeleteAccess = {
  __typename?: 'ProductsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsDeleteDocAccess = {
  __typename?: 'ProductsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsDocAccessFields = {
  __typename?: 'ProductsDocAccessFields';
  categories?: Maybe<ProductsDocAccessFields_Categories>;
  createdAt?: Maybe<ProductsDocAccessFields_CreatedAt>;
  description?: Maybe<ProductsDocAccessFields_Description>;
  price?: Maybe<ProductsDocAccessFields_Price>;
  title?: Maybe<ProductsDocAccessFields_Title>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
};

export type ProductsDocAccessFields_Categories = {
  __typename?: 'ProductsDocAccessFields_categories';
  create?: Maybe<ProductsDocAccessFields_Categories_Create>;
  delete?: Maybe<ProductsDocAccessFields_Categories_Delete>;
  read?: Maybe<ProductsDocAccessFields_Categories_Read>;
  update?: Maybe<ProductsDocAccessFields_Categories_Update>;
};

export type ProductsDocAccessFields_Categories_Create = {
  __typename?: 'ProductsDocAccessFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Categories_Delete = {
  __typename?: 'ProductsDocAccessFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Categories_Read = {
  __typename?: 'ProductsDocAccessFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Categories_Update = {
  __typename?: 'ProductsDocAccessFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_CreatedAt = {
  __typename?: 'ProductsDocAccessFields_createdAt';
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Description = {
  __typename?: 'ProductsDocAccessFields_description';
  create?: Maybe<ProductsDocAccessFields_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Update>;
};

export type ProductsDocAccessFields_Description_Create = {
  __typename?: 'ProductsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Description_Delete = {
  __typename?: 'ProductsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Description_Read = {
  __typename?: 'ProductsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Description_Update = {
  __typename?: 'ProductsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Price = {
  __typename?: 'ProductsDocAccessFields_price';
  create?: Maybe<ProductsDocAccessFields_Price_Create>;
  delete?: Maybe<ProductsDocAccessFields_Price_Delete>;
  read?: Maybe<ProductsDocAccessFields_Price_Read>;
  update?: Maybe<ProductsDocAccessFields_Price_Update>;
};

export type ProductsDocAccessFields_Price_Create = {
  __typename?: 'ProductsDocAccessFields_price_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Price_Delete = {
  __typename?: 'ProductsDocAccessFields_price_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Price_Read = {
  __typename?: 'ProductsDocAccessFields_price_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Price_Update = {
  __typename?: 'ProductsDocAccessFields_price_Update';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Title = {
  __typename?: 'ProductsDocAccessFields_title';
  create?: Maybe<ProductsDocAccessFields_Title_Create>;
  delete?: Maybe<ProductsDocAccessFields_Title_Delete>;
  read?: Maybe<ProductsDocAccessFields_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Title_Update>;
};

export type ProductsDocAccessFields_Title_Create = {
  __typename?: 'ProductsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Title_Delete = {
  __typename?: 'ProductsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Title_Read = {
  __typename?: 'ProductsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_Title_Update = {
  __typename?: 'ProductsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  __typename?: 'ProductsDocAccessFields_updatedAt';
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields = {
  __typename?: 'ProductsFields';
  categories?: Maybe<ProductsFields_Categories>;
  createdAt?: Maybe<ProductsFields_CreatedAt>;
  description?: Maybe<ProductsFields_Description>;
  price?: Maybe<ProductsFields_Price>;
  title?: Maybe<ProductsFields_Title>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
};

export type ProductsFields_Categories = {
  __typename?: 'ProductsFields_categories';
  create?: Maybe<ProductsFields_Categories_Create>;
  delete?: Maybe<ProductsFields_Categories_Delete>;
  read?: Maybe<ProductsFields_Categories_Read>;
  update?: Maybe<ProductsFields_Categories_Update>;
};

export type ProductsFields_Categories_Create = {
  __typename?: 'ProductsFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Categories_Delete = {
  __typename?: 'ProductsFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Categories_Read = {
  __typename?: 'ProductsFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Categories_Update = {
  __typename?: 'ProductsFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields_CreatedAt = {
  __typename?: 'ProductsFields_createdAt';
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
};

export type ProductsFields_CreatedAt_Create = {
  __typename?: 'ProductsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_CreatedAt_Delete = {
  __typename?: 'ProductsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_CreatedAt_Read = {
  __typename?: 'ProductsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_CreatedAt_Update = {
  __typename?: 'ProductsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Description = {
  __typename?: 'ProductsFields_description';
  create?: Maybe<ProductsFields_Description_Create>;
  delete?: Maybe<ProductsFields_Description_Delete>;
  read?: Maybe<ProductsFields_Description_Read>;
  update?: Maybe<ProductsFields_Description_Update>;
};

export type ProductsFields_Description_Create = {
  __typename?: 'ProductsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Description_Delete = {
  __typename?: 'ProductsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Description_Read = {
  __typename?: 'ProductsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Description_Update = {
  __typename?: 'ProductsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Price = {
  __typename?: 'ProductsFields_price';
  create?: Maybe<ProductsFields_Price_Create>;
  delete?: Maybe<ProductsFields_Price_Delete>;
  read?: Maybe<ProductsFields_Price_Read>;
  update?: Maybe<ProductsFields_Price_Update>;
};

export type ProductsFields_Price_Create = {
  __typename?: 'ProductsFields_price_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Price_Delete = {
  __typename?: 'ProductsFields_price_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Price_Read = {
  __typename?: 'ProductsFields_price_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Price_Update = {
  __typename?: 'ProductsFields_price_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Title = {
  __typename?: 'ProductsFields_title';
  create?: Maybe<ProductsFields_Title_Create>;
  delete?: Maybe<ProductsFields_Title_Delete>;
  read?: Maybe<ProductsFields_Title_Read>;
  update?: Maybe<ProductsFields_Title_Update>;
};

export type ProductsFields_Title_Create = {
  __typename?: 'ProductsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Title_Delete = {
  __typename?: 'ProductsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Title_Read = {
  __typename?: 'ProductsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_Title_Update = {
  __typename?: 'ProductsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ProductsFields_UpdatedAt = {
  __typename?: 'ProductsFields_updatedAt';
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
};

export type ProductsFields_UpdatedAt_Create = {
  __typename?: 'ProductsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ProductsFields_UpdatedAt_Delete = {
  __typename?: 'ProductsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ProductsFields_UpdatedAt_Read = {
  __typename?: 'ProductsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ProductsFields_UpdatedAt_Update = {
  __typename?: 'ProductsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ProductsReadAccess = {
  __typename?: 'ProductsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsReadDocAccess = {
  __typename?: 'ProductsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsUpdateAccess = {
  __typename?: 'ProductsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ProductsUpdateDocAccess = {
  __typename?: 'ProductsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Media?: Maybe<Media>;
  Preference?: Maybe<Preference>;
  Product?: Maybe<Product>;
  Products?: Maybe<Products>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessProduct?: Maybe<ProductsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessProductArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  cart?: Maybe<User_Cart>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles: Array<User_Roles>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Customer = 'customer'
}

export type User_Cart = {
  __typename?: 'User_Cart';
  items?: Maybe<Array<User_Cart_Items>>;
};

export type User_Cart_Items = {
  __typename?: 'User_Cart_Items';
  id?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']>;
};

export type User_Cart__Items__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Cart__Items__Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Cart__Items__Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  Customer = 'customer'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Customer = 'customer'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Customer = 'customer'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  cart__items__id?: InputMaybe<User_Cart__Items__Id_Operator>;
  cart__items__product?: InputMaybe<User_Cart__Items__Product_Operator>;
  cart__items__quantity?: InputMaybe<User_Cart__Items__Quantity_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  cart__items__id?: InputMaybe<User_Cart__Items__Id_Operator>;
  cart__items__product?: InputMaybe<User_Cart__Items__Product_Operator>;
  cart__items__quantity?: InputMaybe<User_Cart__Items__Quantity_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  cart__items__id?: InputMaybe<User_Cart__Items__Id_Operator>;
  cart__items__product?: InputMaybe<User_Cart__Items__Product_Operator>;
  cart__items__quantity?: InputMaybe<User_Cart__Items__Quantity_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  cart?: Maybe<UsersDocAccessFields_Cart>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  name?: Maybe<UsersDocAccessFields_Name>;
  password?: Maybe<UsersDocAccessFields_Password>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_Cart = {
  __typename?: 'UsersDocAccessFields_cart';
  create?: Maybe<UsersDocAccessFields_Cart_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Delete>;
  fields?: Maybe<UsersDocAccessFields_Cart_Fields>;
  read?: Maybe<UsersDocAccessFields_Cart_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Update>;
};

export type UsersDocAccessFields_Cart_Create = {
  __typename?: 'UsersDocAccessFields_cart_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Delete = {
  __typename?: 'UsersDocAccessFields_cart_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Fields = {
  __typename?: 'UsersDocAccessFields_cart_Fields';
  items?: Maybe<UsersDocAccessFields_Cart_Items>;
};

export type UsersDocAccessFields_Cart_Read = {
  __typename?: 'UsersDocAccessFields_cart_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Update = {
  __typename?: 'UsersDocAccessFields_cart_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items = {
  __typename?: 'UsersDocAccessFields_cart_items';
  create?: Maybe<UsersDocAccessFields_Cart_Items_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Items_Delete>;
  fields?: Maybe<UsersDocAccessFields_Cart_Items_Fields>;
  read?: Maybe<UsersDocAccessFields_Cart_Items_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Items_Update>;
};

export type UsersDocAccessFields_Cart_Items_Create = {
  __typename?: 'UsersDocAccessFields_cart_items_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Delete = {
  __typename?: 'UsersDocAccessFields_cart_items_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Fields = {
  __typename?: 'UsersDocAccessFields_cart_items_Fields';
  id?: Maybe<UsersDocAccessFields_Cart_Items_Id>;
  product?: Maybe<UsersDocAccessFields_Cart_Items_Product>;
  quantity?: Maybe<UsersDocAccessFields_Cart_Items_Quantity>;
};

export type UsersDocAccessFields_Cart_Items_Read = {
  __typename?: 'UsersDocAccessFields_cart_items_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Update = {
  __typename?: 'UsersDocAccessFields_cart_items_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Id = {
  __typename?: 'UsersDocAccessFields_cart_items_id';
  create?: Maybe<UsersDocAccessFields_Cart_Items_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Items_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Cart_Items_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Items_Id_Update>;
};

export type UsersDocAccessFields_Cart_Items_Id_Create = {
  __typename?: 'UsersDocAccessFields_cart_items_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Id_Delete = {
  __typename?: 'UsersDocAccessFields_cart_items_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Id_Read = {
  __typename?: 'UsersDocAccessFields_cart_items_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Id_Update = {
  __typename?: 'UsersDocAccessFields_cart_items_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Product = {
  __typename?: 'UsersDocAccessFields_cart_items_product';
  create?: Maybe<UsersDocAccessFields_Cart_Items_Product_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Items_Product_Delete>;
  read?: Maybe<UsersDocAccessFields_Cart_Items_Product_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Items_Product_Update>;
};

export type UsersDocAccessFields_Cart_Items_Product_Create = {
  __typename?: 'UsersDocAccessFields_cart_items_product_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Product_Delete = {
  __typename?: 'UsersDocAccessFields_cart_items_product_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Product_Read = {
  __typename?: 'UsersDocAccessFields_cart_items_product_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Product_Update = {
  __typename?: 'UsersDocAccessFields_cart_items_product_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Quantity = {
  __typename?: 'UsersDocAccessFields_cart_items_quantity';
  create?: Maybe<UsersDocAccessFields_Cart_Items_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Items_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Cart_Items_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Items_Quantity_Update>;
};

export type UsersDocAccessFields_Cart_Items_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_cart_items_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_cart_items_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_cart_items_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Cart_Items_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_cart_items_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  cart?: Maybe<UsersFields_Cart>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  name?: Maybe<UsersFields_Name>;
  password?: Maybe<UsersFields_Password>;
  roles?: Maybe<UsersFields_Roles>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_Cart = {
  __typename?: 'UsersFields_cart';
  create?: Maybe<UsersFields_Cart_Create>;
  delete?: Maybe<UsersFields_Cart_Delete>;
  fields?: Maybe<UsersFields_Cart_Fields>;
  read?: Maybe<UsersFields_Cart_Read>;
  update?: Maybe<UsersFields_Cart_Update>;
};

export type UsersFields_Cart_Create = {
  __typename?: 'UsersFields_cart_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Delete = {
  __typename?: 'UsersFields_cart_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Fields = {
  __typename?: 'UsersFields_cart_Fields';
  items?: Maybe<UsersFields_Cart_Items>;
};

export type UsersFields_Cart_Read = {
  __typename?: 'UsersFields_cart_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Update = {
  __typename?: 'UsersFields_cart_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items = {
  __typename?: 'UsersFields_cart_items';
  create?: Maybe<UsersFields_Cart_Items_Create>;
  delete?: Maybe<UsersFields_Cart_Items_Delete>;
  fields?: Maybe<UsersFields_Cart_Items_Fields>;
  read?: Maybe<UsersFields_Cart_Items_Read>;
  update?: Maybe<UsersFields_Cart_Items_Update>;
};

export type UsersFields_Cart_Items_Create = {
  __typename?: 'UsersFields_cart_items_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Delete = {
  __typename?: 'UsersFields_cart_items_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Fields = {
  __typename?: 'UsersFields_cart_items_Fields';
  id?: Maybe<UsersFields_Cart_Items_Id>;
  product?: Maybe<UsersFields_Cart_Items_Product>;
  quantity?: Maybe<UsersFields_Cart_Items_Quantity>;
};

export type UsersFields_Cart_Items_Read = {
  __typename?: 'UsersFields_cart_items_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Update = {
  __typename?: 'UsersFields_cart_items_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Id = {
  __typename?: 'UsersFields_cart_items_id';
  create?: Maybe<UsersFields_Cart_Items_Id_Create>;
  delete?: Maybe<UsersFields_Cart_Items_Id_Delete>;
  read?: Maybe<UsersFields_Cart_Items_Id_Read>;
  update?: Maybe<UsersFields_Cart_Items_Id_Update>;
};

export type UsersFields_Cart_Items_Id_Create = {
  __typename?: 'UsersFields_cart_items_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Id_Delete = {
  __typename?: 'UsersFields_cart_items_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Id_Read = {
  __typename?: 'UsersFields_cart_items_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Id_Update = {
  __typename?: 'UsersFields_cart_items_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Product = {
  __typename?: 'UsersFields_cart_items_product';
  create?: Maybe<UsersFields_Cart_Items_Product_Create>;
  delete?: Maybe<UsersFields_Cart_Items_Product_Delete>;
  read?: Maybe<UsersFields_Cart_Items_Product_Read>;
  update?: Maybe<UsersFields_Cart_Items_Product_Update>;
};

export type UsersFields_Cart_Items_Product_Create = {
  __typename?: 'UsersFields_cart_items_product_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Product_Delete = {
  __typename?: 'UsersFields_cart_items_product_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Product_Read = {
  __typename?: 'UsersFields_cart_items_product_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Product_Update = {
  __typename?: 'UsersFields_cart_items_product_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Quantity = {
  __typename?: 'UsersFields_cart_items_quantity';
  create?: Maybe<UsersFields_Cart_Items_Quantity_Create>;
  delete?: Maybe<UsersFields_Cart_Items_Quantity_Delete>;
  read?: Maybe<UsersFields_Cart_Items_Quantity_Read>;
  update?: Maybe<UsersFields_Cart_Items_Quantity_Update>;
};

export type UsersFields_Cart_Items_Quantity_Create = {
  __typename?: 'UsersFields_cart_items_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Quantity_Delete = {
  __typename?: 'UsersFields_cart_items_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Quantity_Read = {
  __typename?: 'UsersFields_cart_items_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Cart_Items_Quantity_Update = {
  __typename?: 'UsersFields_cart_items_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCategoryInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationMediaInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  price?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationProductUpdateInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  price?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserInput = {
  cart?: InputMaybe<MutationUser_CartInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles: Array<InputMaybe<User_Roles_MutationInput>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  cart?: InputMaybe<MutationUserUpdate_CartInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_CartInput = {
  items?: InputMaybe<Array<InputMaybe<MutationUserUpdate_Cart_ItemsInput>>>;
};

export type MutationUserUpdate_Cart_ItemsInput = {
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type MutationUser_CartInput = {
  items?: InputMaybe<Array<InputMaybe<MutationUser_Cart_ItemsInput>>>;
};

export type MutationUser_Cart_ItemsInput = {
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type ProductsAccess = {
  __typename?: 'productsAccess';
  create?: Maybe<ProductsCreateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
  fields?: Maybe<ProductsFields>;
  read?: Maybe<ProductsReadAccess>;
  update?: Maybe<ProductsUpdateAccess>;
};

export type ProductsDocAccess = {
  __typename?: 'productsDocAccess';
  create?: Maybe<ProductsCreateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
  fields?: Maybe<ProductsDocAccessFields>;
  read?: Maybe<ProductsReadDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'usersLoginResult', token?: string | null, user?: { __typename?: 'User', id?: string | null, name?: string | null, roles: Array<User_Roles> } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', Users?: { __typename?: 'Users', docs?: Array<{ __typename?: 'User', id?: string | null, email?: any | null } | null> | null } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;