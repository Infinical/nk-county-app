/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const keycloakApiUrl = 'https://loudkry.com';
const keycloakApiUrl = 'http://localhost:8002';
const baseUrl = 'http://localhost:8000';
// const baseUrl = 'https://loudkry.com:8443';
const realm = 'revenue-collection';
export const environment = {
  production: false,
  baseUrl,
  client_secret: '111ur1K8PQ92AaqW4qI1t8U5pwEtBhG2',
  grant_type: 'password',
  client_id: 'revenue-collection-customers',
  kService: 'quwoieuqoIweq',
  realm,
  keycloakApiUrl: `${keycloakApiUrl}/auth/realms/${realm}/protocol/openid-connect/token`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
