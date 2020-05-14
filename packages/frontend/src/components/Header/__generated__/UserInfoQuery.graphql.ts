/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UserInfoQueryVariables = {};
export type UserInfoQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly username: string;
        readonly name: string;
        readonly email: string;
    };
};
export type UserInfoQuery = {
    readonly response: UserInfoQueryResponse;
    readonly variables: UserInfoQueryVariables;
};



/*
query UserInfoQuery {
  me {
    id
    username
    name
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UserInfoQuery",
    "operationKind": "query",
    "text": "query UserInfoQuery {\n  me {\n    id\n    username\n    name\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '95fc268ed7574396f0525bf5f2d6c9af';
export default node;